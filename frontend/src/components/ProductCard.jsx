import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore();

  if (!product) return null;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>{product.name}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          ${product.price.toFixed(2)}
        </Typography>
        <Button 
          variant="contained" 
          fullWidth
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
