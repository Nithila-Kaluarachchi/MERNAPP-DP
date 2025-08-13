import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => navigate('/products')}
            >
              GearUp
            </Typography>
          </Box>
          <Box>
            <Button color="inherit" onClick={() => navigate('/cart')} startIcon={<ShoppingCart />}>Cart</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
