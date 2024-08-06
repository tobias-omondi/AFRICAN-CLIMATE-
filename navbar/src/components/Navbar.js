import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';

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
      <AppBar position='fixed' sx={{ backgroundColor: 'dodgerblue' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
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
              sx={{ color: 'black', display: { xs: 'flex', md: 'none' } }}
            >
              <MenuItem onClick={closeMenu}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' ,   transition: 'color 0.3s ease',
                  ':hover': { backgroundColor: 'dodgerblue',}}}>HOME</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' ,   transition: 'color 0.3s ease',
                  ':hover': { backgroundColor: 'dodgerblue',} }}>ABOUT</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/news" style={{ textDecoration: 'none', color: 'black'  ,   transition: 'color 0.3s ease',
                  ':hover': { backgroundColor: 'dodgerblue',}}}>NEWS</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/documentaries" style={{ textDecoration: 'none', color: 'black' ,   transition: 'color 0.3s ease',
                  ':hover': { backgroundColor: 'dodgerblue',} }}>DOCUMENTARIES</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link to="/podcast" style={{ textDecoration: 'none', color: 'black',   transition: 'color 0.3s ease',
                  ':hover': { backgroundColor: 'dodgerblue',} }}>PODCAST</Link>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <Link   to="/contact" style={{ textDecoration: 'none',   color: 'black',   transition: 'color 0.3s ease',
                  ':hover': { backgroundColor: 'dodgerblue',} }}>CONTACT</Link>
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
            sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}
            className='Navbar_desctop_menu'
          >
            <Button color='inherit'>
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>HOME</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>ABOUT</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/news' style={{ textDecoration: 'none', color: 'black' }}>NEWS</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/documentaries' style={{ textDecoration: 'none', color: 'black' }}>DOCUMENTARIES</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/podcast' style={{ textDecoration: 'none', color: 'black' }}>PODCAST</Link>
            </Button>
            <Button color='inherit'>
              <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>CONTACT</Link>
            </Button>
          </Stack>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;