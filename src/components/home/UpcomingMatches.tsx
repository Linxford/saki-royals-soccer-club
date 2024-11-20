import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';

interface Match {
  date: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  venue: string;
}

const UpcomingMatches: React.FC = () => {

  const matches: Match[] = [
    {
      date: '2024-05-15',
      homeTeam: 'Saki Royals',
      awayTeam: 'City United',
      time: '19:00',
      venue: 'Home Stadium'
    },
    {
      date: '2024-05-22',
      homeTeam: 'Riverside FC',
      awayTeam: 'Saki Royals',
      time: '20:00',
      venue: 'Away Stadium'
    },
    {
      date: '2024-06-01',
      homeTeam: 'Saki Royals',
      awayTeam: 'Mountain Rangers',
      time: '18:30',
      venue: 'Home Stadium'
    }
  ];

  return (
    <Box my={4}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#C41E3A' }}
      >
        Upcoming Matches
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {matches.map((match, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  border: '2px solid',
                  borderColor: '#C41E3A',
                //   backgroundColor: '#f4f4f4'

                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#1B5E20' }}>
                  {match.homeTeam} vs {match.awayTeam}
                </Typography>
                <Divider sx={{ my: 2, bgcolor: '#C41E3A' }} />
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Date: {new Date(match.date).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Time: {match.time}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                  Venue: {match.venue}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpcomingMatches;
