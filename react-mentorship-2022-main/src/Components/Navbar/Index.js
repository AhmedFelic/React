import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../style.css';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function Navbar() {
    return (
        <nav>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography
                            variant='h4'
                            component='div'
                            sx={{ flexGrow: 1 }}
                        >
                            <div className='logo-container'>
                                <div className='logo'>
                                    <SportsSoccerIcon fontSize='large' />
                                </div>
                                <div>Livescore</div>
                            </div>
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <Button
                                color='inherit'
                                size='large'
                                className='navbar-button'
                            >
                                Fixtures
                            </Button>
                        </Link>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to='/teamdetails'
                        >
                            <Button
                                color='inherit'
                                size='large'
                                className='navbar-button'
                            >
                                Team Details
                            </Button>
                        </Link>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to='/standings'
                        >
                            <Button
                                color='inherit'
                                size='large'
                                className='navbar-button'
                            >
                                Standings
                            </Button>
                        </Link>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to='/statistics'
                        >
                            <Button
                                color='inherit'
                                size='large'
                                className='navbar-button'
                            >
                                Statistics
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    );
}

export default Navbar;
