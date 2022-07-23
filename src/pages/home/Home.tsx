import React, { ReactElement, FC, useState, useEffect } from 'react';
import { Box, Card, CircularProgress, Grid, InputAdornment, List, ListItem, Pagination, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import RepoItem from '../../components/RepoItem';
import { Repository } from '../../types/home';
import { getRepos } from './Home.util';

const useStyles = makeStyles(() => ({
    textField: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        background: 'white',
        borderRadius: 3,
        width: '55vw'
    },
    input: {
        color: 'white'
    },
    listItem: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}));

const Home: FC<any> = (): ReactElement => {
    const classes = useStyles();

    const [searchKey, setSreachKey] = useState('');
    const [page, setPage] = useState(1);
    const [repoList, setRepoList] = useState<Repository[]>([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    
    function searchRepoByText() {
        if (searchKey.length === 0) return;
        setLoading(true);
        (async () => {
            console.log(searchKey);
            const repos = await getRepos(searchKey, page);
            setLoading(false);
            if (repos === null) return;
            setRepoList(repos.data);
            setCount(repos.totalCount);
        })();
    }

    useEffect(searchRepoByText, [page]);

    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'secondary.main',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3}>
                <Grid item>
                    <TextField
                        label="Search a repository"
                        name="name"
                        variant="outlined"
                        color="primary"
                        className={classes.textField}
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {!loading ? (
                                        <Search />
                                    ) : (
                                        <Box sx={{ display: 'flex' }}>
                                            <CircularProgress size={25} color="secondary" />
                                        </Box>
                                    )}
                                </InputAdornment>
                            )
                        }}
                        value={searchKey}
                        onChange={(event) => setSreachKey(event.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                searchRepoByText();
                                e.preventDefault();
                            }
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <Card
                        elevation={2}
                        sx={{
                            height: '60vh',
                            width: '80vw',
                            background: 'secondary.light',
                            padding: '15px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {repoList.length > 0 ? (
                            <List style={{ maxHeight: '100%', overflow: 'auto' }}>
                                {repoList.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        className={classes.listItem}
                                        onClick={() => {
                                            window.open(item.repoUrl, '_blank');
                                        }}
                                    >
                                        <RepoItem
                                            author={item.author}
                                            description={item.description}
                                            language={item.language}
                                            repoName={item.repoName}
                                            topContributor={item.topContributor}
                                            lastUpdated={item.lastUpdated}
                                            repoUrl={item.repoUrl}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <Typography variant="subtitle1" color="gray" sx={{ paddingTop: '20vh' }}>
                                Please write repository name and press ‘Enter’ on your keyboard
                            </Typography>
                        )}
                    </Card>
                </Grid>
                <Grid item>
                    <Pagination
                        count={Math.ceil(count / 10)}
                        size="medium"
                        page={page}
                        color="primary"
                        siblingCount={2}
                        boundaryCount={0}
                        onChange={async (e, page) => {
                            setPage(page);
                        }}
                        defaultPage={1}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
