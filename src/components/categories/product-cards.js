import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { connect } from 'react-redux';

function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.product.imageUrl}
        alt={props.product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id='name'>
          {props.product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" id='description'>
          {props.product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"onClick={() => props.addToCart(props.product)}>Add to Cart</Button>
        {/* <Button size="small">Details</Button> */}
      </CardActions>
    </Card>
  );
}


const mapStateToProps = (state) => {
	return {
		productSelect: state.product.products,
		categoryFilter: state.category.currentCategory,
	};
};
const mapDispatchToProps = (dispatch) => ({
	changeProduct: (name) => dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
	addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);