import React, { useState, useContext } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Box,
  Switch
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '../../theme/ThemeContext';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Team', path: '/team' },
  { title: 'About', path: '/about' },
  { title: 'Sponsor', path: '/sponsor' },
  { title: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const colorMode = useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderNavLinks = (isMobile = false) => (
    <List
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2,
        padding: isMobile ? 2 : 0,
        width: isMobile ? '300px' : 'auto'
      }}
    >
      {navLinks.map((link) => (
        <ListItem
          key={link.path}
          disableGutters
          sx={{
            width: 'auto',
            justifyContent: 'center',
            padding: isMobile ? 2 : 0
          }}
        >
          <Button
            component={Link}
            to={link.path}
            color="primary"
            onClick={isMobile ? handleDrawerToggle : undefined}
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              textTransform: 'uppercase',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.paper,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark
              }
            }}
          >
            {link.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.primary.dark}`
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.background.paper
              }}
            >
              {/* <img
                src="MenuOpenIcon"
                alt="Menu"
                style={{ height: 24 }}
              /> */}
              <MenuOpenIcon />
            </IconButton>
          )}

          <Box
            display="flex"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/">
              <img
                src="/images/sakiLogo-circle.png"
                alt="Saki Royals FC Logo"
                style={{ height: 40, marginRight: 10 }}
              />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: theme.palette.background.paper
                }}
              >
                Saki Royals FC
              </Typography>
            </Link>
          </Box>

          {!isMobile && renderNavLinks()}

          <Box display="flex" alignItems="center">
            <IconButton
              sx={{
                color: theme.palette.background.paper
              }}
            >
              <Switch
                checked={theme.palette.mode === 'dark'}
                onChange={colorMode.toggleColorMode}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper
          }}
        >
          {renderNavLinks(true)}
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
