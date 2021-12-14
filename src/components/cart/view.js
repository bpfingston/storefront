import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { connect } from 'react-redux';

function ViewCart(props) {
  return (
    <>
      {props.productSelect.map((product) => {
        if (props.cart.includes(product.productName)) {
          return (
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product.cost}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    InCart: {product.quantityOfCart}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    InStock: {product.quantity}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      props.addToCart(product);
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      props.removeFromCart(product);
                    }}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </>
          );
        }
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productSelect: state.product.products,
    categoryFilter: state.category.currentCategory,
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (name) =>
    dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
  addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
  removeFromCart: (product) =>
    dispatch({ type: 'DECREASE_FROM_CART', payload: product }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
