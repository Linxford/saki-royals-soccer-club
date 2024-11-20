import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  styled,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { Club_Email, Club_WhatsApp_Number } from '../utils/helpers';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
    location: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent, method: 'whatsapp' | 'email') => {
    e.preventDefault();
    try {
      if (method === 'whatsapp') {
        const url = `https://wa.me/{Club_WhatsApp_Number}?text=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nLocation: ${formData.location}`
        )}`;
        window.open(url);
      } else if (method === 'email') {
        const mailtoLink = `mailto:royalsoccerclub15@gmail.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nLocation: ${formData.location}`
        )}`;
        window.location.href = mailtoLink;
      }
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', phoneNumber: '', location: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
  }));

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Saki Royals FC
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledPaper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1">
                    <strong>Address:</strong> Ghana (Greater Accra Region ) Tema-Saki
               <br />
           <strong>Phone:</strong> {Club_WhatsApp_Number}
             <br />
              <strong>Email:</strong> {Club_Email}
              </Typography>
            </StyledPaper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledPaper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Social Media
              </Typography>
              <Box display="flex" justifyContent="space-around" flexWrap="wrap">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                  <Button
                    key={platform}
                    variant="outlined"
                    color="primary"
                    startIcon={
                      {
                        Facebook: <Facebook />,
                        Twitter: <Twitter />,
                        Instagram: <Instagram />,
                        YouTube: <YouTube />,
                      }[platform]
                    }
                    onClick={() => {
                      const urls: Record<string, string> = {
                        Facebook:
                          'https://www.facebook.com/Saki-Royals-FC-115134537178261',
                        Twitter: 'https://twitter.com/SakiRoyalsFC',
                        Instagram: 'https://www.instagram.com/sakiroysalsfc/',
                        YouTube:
                          'https://www.youtube.com/channel/UCe6hJFqzK2aXwv8Jd4f6wzw',
                      };
                      window.open(urls[platform], '_blank');
                    }}
                  >
                    {platform}
                  </Button>
                ))}
              </Box>
            </StyledPaper>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <StyledPaper elevation={3} sx={{ p: 3 }}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="location"
                    label="Location"
                    type="text"
                    variant="outlined"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="space-between">
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleSubmit(e, 'whatsapp')}
                  >
                    Send to WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={(e) => handleSubmit(e, 'email')}
                  >
                    Send as Email
                  </Button>
                </Grid>
                {submitStatus === 'success' && (
                  <Grid item xs={12}>
                    <Alert severity="success">Message sent successfully!</Alert>
                  </Grid>
                )}
                {submitStatus === 'error' && (
                  <Grid item xs={12}>
                    <Alert severity="error">Failed to send message. Please try again.</Alert>
                  </Grid>
                )}
              </Grid>
            </form>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;






        //         <strong>Address:</strong> Ghana (Greater Accra Region ) Tema-Saki
        //         <br />
        //         <strong>Phone:</strong> {Club_WhatsApp_Number}
        //         <br />
        //         <strong>Email:</strong> {Club_Email}
        //       </Typography>
        //     </StyledPaper>
        //   </motion.div>
        // </Grid>
