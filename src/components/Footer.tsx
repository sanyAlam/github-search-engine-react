import React, { FC, ReactElement } from 'react';
import { Box, Container, Grid } from '@mui/material';

export const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'secondary.main',
                paddingTop: '1rem',
                paddingBottom: '1rem'
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center"></Grid>
            </Container>
        </Box>
    );
};

export default Footer;
