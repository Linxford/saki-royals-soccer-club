import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: '2px solid',
        // borderColor: 'linear-gradient( #000, #da291c, #008000)',
        position: 'relative',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                    url('../images/hero-background2.jpg') no-repeat center center`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          gutterBottom
        >
          Saki Royals Soccer Club
        </Typography>
        <Typography
          variant={isMobile ? 'subtitle1' : 'h5'}
          paragraph
        >
          Passion, Skill, Victory
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          gap={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              window.open('/contact', '_self');
            }}
          >
            Join Team
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: theme.palette.primary.main
              }
            }}
            onClick={() => {
              window.open('/about', '_self');
            }}
          >
            Learn More
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
