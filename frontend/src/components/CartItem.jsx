import React from 'react';
import { 
  ListItem, 
  ListItemText, 
  IconButton, 
  TextField, 
  Box, 
  Typography 
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        borderBottom: '1px solid #eee'
      }}
    >
      <ListItemText
        primary={item.product.name}
        secondary={`$${item.product.price} each`}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          type="number"
          size="small"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.product._id, parseInt(e.target.value))}
          inputProps={{ min: 1 }}
          sx={{ width: '70px' }}
        />
        <Typography variant="body1" sx={{ minWidth: '80px' }}>
          ${(item.product.price * item.quantity).toFixed(2)}
        </Typography>
        <IconButton 
          edge="end" 
          color="error"
          onClick={() => onRemove(item.product._id)}
        >
          <Delete />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default CartItem;
