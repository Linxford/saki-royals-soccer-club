import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  styled
} from '@mui/material';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  '&:hover': {
    border: `2px solid ${theme.palette.secondary.main}`
  }
}));

interface NewsItem {
  title: string;
  summary: string;
  image: string;
  date: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: 'Season Kickoff Success',
      summary: 'Saki Royals start the season with a remarkable victory',
      image: '../images/sakiLogo.jpeg',
      date: '2024-04-15'
    },
    {
      title: 'Youth Academy Achievements',
      summary: 'Our young talents shine in regional tournaments',
      image: '../images/sakiLogo.jpeg',
      date: '2024-04-20'
    },
    {
      title: 'New Training Facility',
      summary: 'State-of-the-art training center opens this month',
      image: '../images/sakiLogo.jpeg',
      date: '2024-04-25'
    }
  ];

  return (
    <Box my={4}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1B5E20' }}
      >
        Latest News
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {newsItems.map((news, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
              transition={{ duration: 0.3 }}
            >
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={news.image}
                    alt={news.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: '#C41E3A' }}>
                      {news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.summary}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      {new Date(news.date).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsSection;
