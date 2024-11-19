import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        py: 4,
        borderTop: 10,
        borderColor: 'secondary.main',
        color: 'common.white',
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ flexGrow: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
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
                  }}
                >
                  Saki Royals FC
                </Typography>
              </Link>
            </Box>
            <Typography variant="body2" color="common.white">
              Building champions through passion, skill, and teamwork.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} container justifyContent="center">
            <Box>
              <Typography variant="subtitle1" color="common.white">Follow Us</Typography>
              <Box>
                {[
                  { icon: <Facebook />, link: '#' },
                  { icon: <Twitter />, link: '#' },
                  { icon: <Instagram />, link: '#' },
                  { icon: <YouTube />, link: '#' }
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.link}
                    target="_blank"
                    sx={{ color: 'common.white' }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} container justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <Box>
              <Typography variant="body2" color="common.white">
                © {new Date().getFullYear()} Saki Royals FC
              </Typography>
              <Typography variant="body2" color="common.white">
                All Rights Reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
