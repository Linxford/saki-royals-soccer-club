import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Thank You for Your Donation!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Your support means a lot to us. Together, we can achieve more for Saki Royals FC!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ThankYouPage;
