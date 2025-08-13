import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore();

  return (
    <Card>
      <CardMedia component="img" height="140" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h5" color="primary">${product.price}</Typography>
        <Button variant="contained" onClick={() => addToCart(product)}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}
