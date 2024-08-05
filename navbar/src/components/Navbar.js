import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-scroll';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

      // State for menu anchor element
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='fixed'  sx={{ backgroundColor: 'white' }}>
        <Toolbar> 
            {/* logo and the title */}
            <IconButton
            size="large"
            edge='start'
            color='inherit'
            aria-label='logo'
            sx={{ color: 'blue', display: { xs: 'none', md: 'flex' } }}>
            </IconButton>
            <CatchingPokemonIcon />
            <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: 'black', display: { xs: 'none', md: 'flex' } }}
            >
                My Web
            </Typography>
                {/* navigation buttons & Links for DEsktop */}
                <Stack direction="row" spacing={4} sx={{ color: 'black', display: { xs: 'none', md: 'flex' } }}>
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

                {/* menu for mobile phones  */}
                <Stack direction='row' spacing={3} sx={{color: 'black', display: { xs: 'flex', md: 'none' }}}>
                <IconButton size="large" edge="start" color="inherit" sx={{ color: 'black' }} onClick={openMenu}>
                   <MenuIcon />
                </IconButton>
                <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                PaperProps={{
                    sx: {
                      width: '250px', // Set your desired width here
                    }
                }}
                     sx={{ color: 'blue', display: { xs: 'flex', md: 'none'} }}
                     >
                    <MenuItem onClick={closeMenu}>
                       <Link to="/">HOME</Link>
                      </MenuItem>

                    <MenuItem onClick={closeMenu}>
                      <Link to="about" >ABOUT</Link>
                    </MenuItem>

                    <MenuItem onClick={closeMenu}>
                      <Link to="news">NEWS</Link>
                     </MenuItem>

                    <MenuItem onClick={closeMenu}>
                      <Link to="documentaries">DOCUMENTARIES</Link>
                    </MenuItem>

                    <MenuItem onClick={closeMenu}>
                      <Link to="podcats">PODCAST</Link>
                    </MenuItem>

                    <MenuItem onClick={closeMenu}>
                      <Link to="contacts">CONTACT</Link>
                    </MenuItem>
                </Menu>
                </Stack>

                {/* logo title for mobile phone */}
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                sx={{ color: 'blue', display: { xs: 'flex', md: 'none' } }}
                 >
                <CatchingPokemonIcon />
                </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black', display: { xs: 'flex', md: 'none' } }}>
          Web
        </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
