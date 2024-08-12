import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../components/ASSET/Africa by graphicsgarageproject.jpeg';
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'NEWS', path: '/news' },
    { label: 'DOCUMENTARIES', path: '/documentaries' },
    { label: 'PODCAST', path: '/podcast' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <div>
      <AppBar position='fixed' sx={{ backgroundColor: 'dodgerblue' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and title for mobile */}
          {isMobile && (
            <img src={logo} alt='logo' className='logo-image-mobile' />
          )}

          {/* Mobile Menu */}
          <Stack direction='row' spacing={3} sx={{ color: 'black', display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              open={menuOpen}
              onClose={closeMenu}
              PaperProps={{ sx: { width: '250px' } }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.label} onClick={closeMenu}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Stack>

          {/* Logo and title for desktop */}
          {!isMobile && (
            <img src={logo} alt='logo' className='logo-image' />
          )}
          {/* <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: 'black', display: { xs: 'none', md: 'flex' } }}
          >
            AFRO
          </Typography> */}

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={5}
            sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}
          >
            {menuItems.map((item) => (
              <Button color='inherit' key={item.label}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
