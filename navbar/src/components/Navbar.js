import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Stack, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../components/ASSET/Africa by graphicsgarageproject.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsMenuOpen, setNewsMenuOpen] = useState(null);
  const [advocacyMenuOpen, setAdvocacyMenuOpen] = useState(null);
  const [interviewsMenuOpen, setInterviewsMenuOpen] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setNewsMenuOpen(null);
    setAdvocacyMenuOpen(null);
    setInterviewsMenuOpen(null);
  };

  const handleNewsMenuOpen = (event) => {
    setNewsMenuOpen(event.currentTarget);
  };

  const handleAdvocacyMenuOpen = (event) => {
    setAdvocacyMenuOpen(event.currentTarget);
  };

  const handleInterviewsMenuOpen = (event) => {
    setInterviewsMenuOpen(event.currentTarget);
  };

  const handleNewsMenuClose = () => {
    setNewsMenuOpen(null);
  };

  const handleAdvocacyMenuClose = () => {
    setAdvocacyMenuOpen(null);
  };

  const handleInterviewsMenuClose = () => {
    setInterviewsMenuOpen(null);
  };

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'NEWS & MEDIA', path: '/news', hasDropdown: true },
    { label: 'ADVOCACY & CAMPAIGNS', path: '/advocacy', hasDropdown: true },
    { label: 'INTERVIEWS', path: '/interviews', hasDropdown: true },
    { label: 'CONTACT', path: '/contact' },
  ];

  const newsDropdownItems = [
    { label: 'Latest News', path: '/news/latest' },
    { label: 'Documentaries & Videos', path: '/news/documentaries' },
    { label: 'Podcasts', path: '/news/podcasts' },
    { label: 'Press Releases', path: '/news/press-releases' },
  ];

  const advocacyDropdownItems = [
    { label: 'Current Campaigns', path: '/advocacy/current' },
    { label: 'Success Stories', path: '/advocacy/success' },
    { label: 'Get Involved', path: '/advocacy/get-involved' },
  ];

  const interviewsDropdownItems = [
    { label: 'Expert Interviews', path: '/interviews/expert' },
    { label: 'Panel Discussions', path: '/interviews/panel' },
    { label: 'Webinars', path: '/interviews/webinars' },
    { label: 'Live Events', path: '/interviews/live' },
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
                <div key={item.label}>
                  <MenuItem onClick={(event) => {
                    if (item.hasDropdown) {
                      closeMenu(); // Close the main menu
                      if (item.label === 'NEWS & MEDIA') {
                        handleNewsMenuOpen(event);
                      } else if (item.label === 'ADVOCACY & CAMPAIGNS') {
                        handleAdvocacyMenuOpen(event);
                      } else if (item.label === 'INTERVIEWS') {
                        handleInterviewsMenuOpen(event);
                      }
                    } else {
                      closeMenu(); // Close the main menu if no dropdown
                    }
                  }}>
                    <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                      {item.label}
                    </Link>
                  </MenuItem>
                  {item.hasDropdown && (
                    <Menu
                      anchorEl={item.label === 'NEWS & MEDIA' ? newsMenuOpen : item.label === 'ADVOCACY & CAMPAIGNS' ? advocacyMenuOpen : interviewsMenuOpen}
                      open={item.label === 'NEWS & MEDIA' ? Boolean(newsMenuOpen) : item.label === 'ADVOCACY & CAMPAIGNS' ? Boolean(advocacyMenuOpen) : Boolean(interviewsMenuOpen)}
                      onClose={handleNewsMenuClose}
                      PaperProps={{ sx: { width: '250px' } }}
                    >
                      {(item.label === 'NEWS & MEDIA' ? newsDropdownItems : item.label === 'ADVOCACY & CAMPAIGNS' ? advocacyDropdownItems : interviewsDropdownItems).map((dropdownItem) => (
                        <MenuItem key={dropdownItem.label} onClick={closeMenu}>
                          <Link to={dropdownItem.path} style={{ textDecoration: 'none', color: 'black' }}>
                            {dropdownItem.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </div>
              ))}
            </Menu>
          </Stack>

          {/* Logo and title for desktop */}
          {!isMobile && (
            <img src={logo} alt='logo' className='logo-image' />
          )}

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={5}
            sx={{ color: 'black', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}
          >
            {menuItems.map((item) => (
              <Button
                color='inherit'
                key={item.label}
                aria-controls={item.hasDropdown ? (item.label === 'NEWS & MEDIA' ? 'news-menu' : item.label === 'ADVOCACY & CAMPAIGNS' ? 'advocacy-menu' : 'interviews-menu') : undefined}
                aria-haspopup={item.hasDropdown ? true : undefined}
                aria-expanded={item.hasDropdown ? (item.label === 'NEWS & MEDIA' ? Boolean(newsMenuOpen) : item.label === 'ADVOCACY & CAMPAIGNS' ? Boolean(advocacyMenuOpen) : Boolean(interviewsMenuOpen)) : undefined}
                onClick={item.label === 'NEWS & MEDIA' ? handleNewsMenuOpen : item.label === 'ADVOCACY & CAMPAIGNS' ? handleAdvocacyMenuOpen : item.label === 'INTERVIEWS' ? handleInterviewsMenuOpen : undefined}
              >
                <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Menu
              id="news-menu"
              anchorEl={newsMenuOpen}
              open={Boolean(newsMenuOpen)}
              onClose={handleNewsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'news-button',
              }}
            >
              {newsDropdownItems.map((item) => (
                <MenuItem key={item.label} onClick={handleNewsMenuClose}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              id="advocacy-menu"
              anchorEl={advocacyMenuOpen}
              open={Boolean(advocacyMenuOpen)}
              onClose={handleAdvocacyMenuClose}
              MenuListProps={{
                'aria-labelledby': 'advocacy-button',
              }}
            >
              {advocacyDropdownItems.map((item) => (
                <MenuItem key={item.label} onClick={handleAdvocacyMenuClose}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              id="interviews-menu"
              anchorEl={interviewsMenuOpen}
              open={Boolean(interviewsMenuOpen)}
              onClose={handleInterviewsMenuClose}
              MenuListProps={{
                'aria-labelledby': 'interviews-button',
              }}
            >
              {interviewsDropdownItems.map((item) => (
                <MenuItem key={item.label} onClick={handleInterviewsMenuClose}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
