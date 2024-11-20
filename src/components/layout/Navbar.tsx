import React, { useState, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  useMediaQuery,
  useTheme,
  Box,
  Switch,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '../../theme/ThemeContext';
// import { inherits } from 'util';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Team', path: '/team' },
  { title: 'About', path: '/about' },
  { title: 'Sponsor', path: '/sponsor' },
  { title: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const colorMode = useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderNavLinks = (isMobile: boolean) => (
    <List
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 1 : 3,
        padding: isMobile ? 2 : 0,
        alignItems: isMobile ? 'flex-start' : 'center',
      }}
    >
      {navLinks.map((link) => (
        <ListItem
          key={link.path}
          disableGutters
          sx={{
            width: isMobile ? '100%' : 'auto',
            textAlign: isMobile ? 'center' : 'left',
            padding: isMobile ? '10px 0' : 0,
          }}
        >
          <Button
            component={Link}
            to={link.path}
            onClick={isMobile ? handleDrawerToggle : undefined}
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              textTransform: 'uppercase',
              color: isMobile ? theme.palette.text.primary : theme.palette.background.paper,
              background: isMobile
                ? `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                : 'none',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: isMobile ? theme.palette.primary.dark : theme.palette.action.hover,
              },
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
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.background.paper,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img
                src="/images/sakiLogoCircle.png"
                alt="Saki Royals FC Logo"
                style={{ height: 40, marginRight: 10 }}
              />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: 'inherit',
                }}
              >
                Saki Royals FC
              </Typography>
            </Link>
          </Box>

          {!isMobile && renderNavLinks(false)}

          <Box display="flex" alignItems="center">
            <Switch
              checked={theme.palette.mode === 'dark'}
              onChange={colorMode.toggleColorMode}
              color="default"
            />
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
            '.MuiDrawer-paper': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.paper,
              width: '75%',
              padding: 2,
            },
          }}
        >
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Box display="flex" alignItems="center">
                <img
                  src="/images/sakiLogoCircle.png"
                  alt="Saki Royals FC Logo"
                  style={{ height: 40, marginRight: 10 }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 'bold',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: theme.palette.background.paper,
                  }}
                >
                  Saki Royals FC
                </Typography>
              </Box>
              <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.background.paper }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ backgroundColor: theme.palette.background.paper, mb: 2 }} />
            {renderNavLinks(true)}
            <Divider sx={{ backgroundColor: theme.palette.background.paper, mt: 2 }} />
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
