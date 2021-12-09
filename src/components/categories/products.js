import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './product-cards';
import { Box } from '@mui/material';

const Products = (props) => {
  return (
    <Box>
      {props.products.map((product, index) => {
        return <ProductCard key={index} products={product} />;
      })}
    </Box>
  );
};

const mapStateToProps = (state) =>({products: state.products.products}) 

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (name) =>
    dispatch({ type: 'SELECTED_CATAGORY', payload: name }),
});

export default connect(mapDispatchToProps, mapStateToProps)(Products);
