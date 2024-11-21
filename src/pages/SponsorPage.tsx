import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia, CardActions, Modal, Link } from '@mui/material';

const sponsors = [
  {
    id: 1,
    name: 'Saki Royals SC',
    logo: '/images/hero-background.jpg', // Use public folder paths
    description: 'Our official football club',
    cta: 'Support us',
  },
  {
    id: 2,
    name: 'Saki Sports',
    logo: '/images/hero-background2.jpg',
    description: 'Our official sports partner',
    cta: 'Visit website',
  },
  {
    id: 3,
    name: 'Saki Foundation',
    logo: '/images/sakiLogo.jpeg',
    description: 'Our official foundation partner',
    cta: 'Donate now',
  },
];

const SponsorPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleCTAClick = (id: number) => {
    switch (id) {
      case 1:
        setPhoneNumber('+233 548 522 077');
        setOpenModal(true);
        break;
      case 2:
        window.open('https://sakisports.com', '_blank'); // Replace with actual URL
        break;
      case 3:
        setPhoneNumber('+233 548 522 077');
        setOpenModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Our Sponsors
      </Typography>
      <Grid container spacing={4}>
        {sponsors.map((sponsor) => (
          <Grid item xs={12} md={4} key={sponsor.id}>
            <Card
              sx={{
                border: 2,
                borderColor: 'primary.main',
                borderRadius: 10,
                boxShadow: 8,
                '&:hover': {
                  borderColor: 'secondary.main',
                  boxShadow: 12,
                },
              }}
            >
              <CardMedia
                component="img"
                alt={sponsor.name}
                height="140"
                image={sponsor.logo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {sponsor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {sponsor.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" onClick={() => handleCTAClick(sponsor.id)} sx={{ color: 'primary.main' }}>
                  {sponsor.cta}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: 2,
            borderColor: 'primary.main',
            borderRadius: 10,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="contact-modal-title" variant="h6" component="h2">
            Contact Us
          </Typography>
          <Typography id="contact-modal-description" variant="body2" color="text.secondary">
            Call us at {phoneNumber} to donate now or visit our{' '}
            <Link href="/donate" underline="hover">
              Donate Page
            </Link>
          </Typography>
          <Button onClick={() => setOpenModal(false)} sx={{ mt: 2, color: 'primary.main' }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default SponsorPage;
