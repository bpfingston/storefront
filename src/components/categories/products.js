import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './product-cards';
import { Box } from '@mui/material';
import { fetchProducts } from '../../store/product';

function Products(props) {

  useEffect(() => {
    props.getProducts();
  }, [])


  return (
    <Box
      className="product"
      maxWidth="xxl"
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 10,
        marginleft: 10,
      }}
    >
      {props.product.map((product, index) => {
        return <ProductCard key={index} product={product} props={props}/>;
      })}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.products,
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  changeCategory: (name) =>
  dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
