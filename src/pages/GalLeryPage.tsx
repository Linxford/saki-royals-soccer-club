import React from 'react';
import { Box, Grid, Card, CardMedia, Typography, Modal, Fade, Backdrop } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C41E3A',
    },
    secondary: {
      main: '#1B5E20',
    },
    background: {
      default: '#f4f4f4',
    },
  },
});

const images = [
  { title: 'Image 1', src: '../images/sakiLogo.jpeg', description: 'This is a description of the first image', date: '2022-01-01' },
  { title: 'Image 2', src: '../images/sakiLogo.jpeg', description: 'This is a description of the second image', date: '2022-01-15' },
  { title: 'Image 3', src: '../images/sakiLogo.jpeg', description: 'This is a description of the third image', date: '2022-02-01' },
  // Add more images as needed
];

const GalleryPage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen(true);
    setSelectedImage(index);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 4, border: '1px solid #ccc' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gallery
        </Typography>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card onClick={() => handleOpen(index)} sx={{ cursor: 'pointer', border: '1px solid #C41E3A' }}>
                <CardMedia component="img" alt={image.title} height="200" image={image.src} />
                <Typography variant="body1" align="center" sx={{ padding: 1, color: '#1B5E20' }}>
                  {image.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.default',
              boxShadow: 24,
              p: 4,
              border: '1px solid #C41E3A',
            }}>
              {selectedImage !== null && (
                <Card>
                  <CardMedia component="img" alt={images[selectedImage].title} height="500" image={images[selectedImage].src} />
                  <Typography variant="h6" align="center" sx={{ padding: 1, color: '#1B5E20' }}>
                    {images[selectedImage].title}
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ padding: 1, color: '#1B5E20' }}>
                    {images[selectedImage].description}
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ padding: 1, color: '#1B5E20' }}>
                    {images[selectedImage].date}
                  </Typography>
                </Card>
              )}
            </Box>
          </Fade>
        </Modal>
      </Box>
    </ThemeProvider>
  );
};

export default GalleryPage;
