import { useEffect, useState } from "react";
import { Container, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import { useProductStore } from "../store/productStore";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const { products, loading, error, fetchProducts } = useProductStore();
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const result = await fetchProducts();
      if (!result.success) {
        setLocalError(result.message);
      }
    };
    loadProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || localError) {
    return (
      <Container>
        <Alert severity="error">{error || localError}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Products</Typography>
      {products && products.length > 0 ? (
        <Grid container spacing={3}>
          {products.map(p => (
            <Grid item xs={12} sm={6} md={4} key={p._id}>
              <ProductCard product={p} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No products available.
        </Typography>
      )}
    </Container>
  );
}
