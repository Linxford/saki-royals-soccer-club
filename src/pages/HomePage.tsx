import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import UpcomingMatches from '../components/home/UpcomingMatches';
import NewsSection from '../components/home/NewsSection';
import GalleryPage from './GalLeryPage';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', padding: 2 }}>
      <HeroSection />

      <Box my={4}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: '#C41E3A' }}
        >
          Club Highlights
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: 'Team Performance',
              description: 'Top performers this season',
              image: '../images/sakiLogo.jpeg'
            },
            {
              title: 'Training Insights',
              description: 'Behind the scenes of our training',
              image: '../images/sakiLogo.jpeg'
            },
            {
              title: 'Youth Development',
              description: 'Nurturing future champions',
              image: '../images/sakiLogo.jpeg'
            }
          ].map((highlight, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{
                  border: '2px solid',
                  borderColor: '#C41E3A',
                  borderRadius: 2,
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    borderColor: '#1B5E20'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={highlight.image}
                    alt={highlight.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#C41E3A' }}>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <UpcomingMatches />
      <GalleryPage />
      <NewsSection />
    </Box>
  );
};

export default HomePage;
