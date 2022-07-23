import React, { FC, ReactElement } from 'react';
import { Box, Container } from '@mui/material';

const Navbar: FC = (): ReactElement => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const handleOpenNavMenu = (event: any) => {
    //   setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //   setAnchorElNav(null);
    // };

    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'secondary.main'
            }}
        >
            <Container maxWidth="xl"></Container>
        </Box>
    );
};

export default Navbar;
