import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const OrderSuccess = () => (
  <Container maxWidth="sm">
    <Box sx={{ mt: 4, p: 3, boxShadow: 2, borderRadius: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Order Confirmed!</Typography>
      <Typography variant="body1">Thank you for your purchase. A confirmation email has been sent to you.</Typography>
    </Box>
  </Container>
);

export default OrderSuccess;
