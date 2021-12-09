import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

function ProductCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.pictureURL}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id='name'>
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" id='description'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;