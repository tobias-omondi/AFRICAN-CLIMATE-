import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='fixed' sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          {/* Logo and title for mobile phone */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ color: 'blue', display: { xs: 'flex', md: 'none' } }}
          >
            <CatchingPokemonIcon />
          </IconButton>
          
          {/* Menu for mobile phones */}
          <Stack direction='row' spacing={3} sx={{ color: 'black', display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" sx={{ color: 'black' }} onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
              PaperProps={{
                sx: {
                  width: '250px',
                },
              }}
              sx={{ color: 'blue', display: { xs: 'flex', md: 'none' } }}
            >
              <MenuItem onClick={closeMenu}>
                <Link to="/">HOME</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/about">ABOUT</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/news">NEWS</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/documentaries">DOCUMENTARIES</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/podcast">PODCAST</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/contact">CONTACT</Link>
              </MenuItem>
            </Menu>
          </Stack>

          {/* Logo and title for desktop */}
          <IconButton
            size="large"
            edge='start'
            color='inherit'
            aria-label='logo'
            sx={{ color: 'blue', display: { xs: 'none', md: 'flex' } }}
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: 'black', display: { xs: 'none', md: 'flex' } }}
          >
            My Web
          </Typography>

          {/* Navigation buttons & Links for Desktop */}
          <Stack
            direction="row"
            spacing={5}
            sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, textDecoration: 'none', justifyContent:'space-evenly' }}
            className='Navbar_desctop_menu'
          >
            <Button color='inherit'>
              <Link to='/'>HOME</Link>
            </Button>
            <Button color='inherit'>
              <Link to='about'>About</Link>
            </Button>
            <Button color='inherit'>
              <Link to='news'>NEWS</Link>
            </Button>
            <Button color='inherit'>
              <Link to='documentaries'>DOCUMENTARIES</Link>
            </Button>
            <Button color='inherit'>
              <Link to='podcast'>PODCAST</Link>
            </Button>
            <Button color='inherit'>
              <Link to='contact'>CONTACT</Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
