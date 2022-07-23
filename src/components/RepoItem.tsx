import React, { ReactElement, FC } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Repository } from '../types/home';
import moment from 'moment';

const useStyles = makeStyles(() => ({
    repoCard: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        background: 'secondary.light',
        borderRadius: 3,
        width: '65vw'
    },
    repoName: {
        textDecoration: 'underline',
        color: '#338dfb'
    },
    ellipsis: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 1,
        '-webkit-box-orient': 'vertical'
    },
    lang: {
        fontWeight: 'bold',
        color: '#338dfb'
    },
    number: {
        fontWeight: 'bold',
        color: 'black'
    },
    type: {
        fontWeight: 'light',
        color: 'gray'
    }
}));

const RepoItem: FC<Repository> = ({ repoName, description, topContributor, language, author, lastUpdated, repoUrl }): ReactElement => {
    const classes = useStyles();
    const formattedDate = moment(lastUpdated).format('MMMM Do YYYY');

    return (
        <Card elevation={2} className={classes.repoCard}>
            <CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Grid item sm={6}>
                        <Grid container direction="column" justifyContent="start" alignItems="start">
                            <Grid item>
                                <Typography variant="h6" className={classes.repoName}>
                                    {repoName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" color="gray">
                                    {author}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption" className={classes.ellipsis}>
                                    {description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption" className={classes.lang}>
                                    {language}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container direction="column" alignItems="start" justifyContent="start">
                            <Grid item>
                                <Grid container direction="row" spacing={0.5}>
                                    <Grid item>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'black' }}>
                                            Most active contributor:
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#376297' }}>
                                            {topContributor.author}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item>
                                        <Grid container direction="row" spacing={0.5}>
                                            <Grid item>
                                                <Typography variant="caption" className={classes.number}>
                                                    {topContributor.a}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="caption" className={classes.type}>
                                                    additions
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row" spacing={0.5}>
                                            <Grid item>
                                                <Typography variant="caption" className={classes.number}>
                                                    {topContributor.d}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="caption" className={classes.type}>
                                                    detitions
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row" spacing={0.5}>
                                            <Grid item>
                                                <Typography variant="caption" className={classes.number}>
                                                    {topContributor.c}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="caption" className={classes.type}>
                                                    commits
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Grid container direction="row" justifyContent="end" alignItems="flex-end">
                <Box paddingRight={1} paddingBottom={1}>
                    <Typography variant="caption" color="gray">
                        {`Updated on ${formattedDate}`}
                    </Typography>
                </Box>
            </Grid>
        </Card>
    );
};

export default RepoItem;
