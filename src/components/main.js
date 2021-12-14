import * as React from 'react';
import { connect } from 'react-redux'
import ViewCart from './cart/view'
import Products from './categories/products';
import Header from './header';
import Footer from './footer';
import Box from '@mui/material/Box';

function Main(props) {
  const [cartView, setCartView] = React.useState();

  console.log(ViewCart)
  const showCartHandler = (e) => setCartView(true);

  const hideCartHandler = () => setCartView(false); 

  return (
    <>
      <Header 
      showCartHandler={showCartHandler}
      hideCartHandler={hideCartHandler}
      />
      <Box>
        {props.categorySelect.currentCategory ? (
          <h1>{props.categorySelect.currentCategory}Products</h1>

        ):(
          <h1>Welcome to StoreFront</h1>
        )}
        {!cartView ? <Products /> : <ViewCart />}
      </Box>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  // cartState: state.cart.totalItems,
  categorySelect: state.category
});

export default connect(mapStateToProps)(Main);
