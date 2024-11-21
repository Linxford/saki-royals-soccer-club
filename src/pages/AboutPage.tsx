import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
//   const currentYear = new Date().getFullYear();

  const clubHistory = [
    { year: 2023, event: 'Club Founded' },
    { year: 2023 , event: 'First League Championship' },
    { year: 2023, event: 'Youth Academy Established' },
    { year: 2024, event: 'New Training Facility Opened' }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        About Saki Royals SC
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 3, border: 2, borderColor: 'primary.main', borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Our Journey So Far
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2, mb: 2, color: 'text.secondary' }}>
                <li>
                  After a thorough training camp, we kicked off our match series with:
                </li>
                <li>•⁠  ⁠A thrilling win in our debut match, setting the tone for our journey.</li>
                <li>•⁠  ⁠A draw in our second match, showcasing our potential and areas for growth.</li>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Recognizing the need for improvement, we intensified our training, focusing on strength, fitness, and teamwork.
                This strategic decision yielded positive results:
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2, mb: 2, color: 'text.secondary' }}>
                <li>•⁠  ⁠6 wins, demonstrating our growth and determination.</li>
                <li>•⁠  ⁠3 draws, highlighting our resilience and competitive spirit.</li>
                <li>•⁠  ⁠4 losses, valuable lessons learned and fueling our continuous improvement.</li>
              </Typography>
              <Typography variant="body1" align="center" sx={{ color: 'text.secondary' }}>
                Total Matches Played: 13
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 3, border: 2, borderColor: 'secondary.main', borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2, mb: 2, color: 'text.secondary' }}>
                <li>Develop and nurture young football talents, providing a platform for growth and excellence.</li>
                <li>Foster a culture of teamwork, discipline, and sportsmanship, both on and off the pitch.</li>
                <li>Promote grassroots football development in our community, inspiring a love for the beautiful game.</li>
                <li>Build a competitive and successful team, proudly representing our region in local and national competitions.</li>
                <li>Create a supportive and inclusive environment, where players, staff, and fans unite to achieve greatness.</li>
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 3, border: 2, borderColor: 'primary.main', borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom color="secondary">
                Our Vision
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2, mb: 2, color: 'text.secondary' }}>
                <li>Become a leading football club recognized for excellence in player development and performance.</li>
                <li>Expand our influence in the football community, inspiring future generations to pursue their passion.</li>
                <li>Leverage cutting-edge training techniques and technologies to maximize player potential.</li>
                <li>Engage with fans and stakeholders through innovative and memorable experiences.</li>
                <li>Champion social responsibility initiatives, making a positive impact on society through football.</li>
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom color="secondary">
            Club History Timeline
          </Typography>
          <Timeline>
            {clubHistory.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  {index < clubHistory.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 2, bgcolor: 'background.default', color: 'text.primary' }}>
                    <Typography variant="h6" color="primary">{item.year}</Typography>
                    <Typography variant="body1">{item.event}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
