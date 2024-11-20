import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PayStack_Key } from '../utils/helpers';
import { channel } from 'diagnostics_channel';

const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isPaystackLoaded, setIsPaystackLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Dynamically load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => setIsPaystackLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateInputs = () => {
    if (!email) {
      setError('Email is required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return false;
    }
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid donation amount.');
      return false;
    }
    setError('');
    return true;
  };

  const handlePayment = () => {
    if (!validateInputs()) return;

    if (!isPaystackLoaded) {
      alert('Payment system is still loading. Please try again.');
      return;
    }

    const handler = (window as any).PaystackPop.setup({
      key: PayStack_Key,
      email,
      amount: parseInt(amount) * 100, // Convert to GHS pesewa
      currency: 'GHS',
      channel: ['mobile_money'],
      callback: function (response: any) {
        console.log('Payment successful! Reference: ', response.reference);
        navigate('/thank-you'); // Redirect to Thank-You Page
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });

    handler.openIframe();
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Donate to Saki Royals FC
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount (e.g., 5000)"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handlePayment}
            disabled={!isPaystackLoaded}
          >
            {isPaystackLoaded ? 'Donate Now' : 'Loading...'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonatePage;
