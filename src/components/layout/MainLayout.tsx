import React, { useState } from 'react';
import {
  Box,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Navbar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4)
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
