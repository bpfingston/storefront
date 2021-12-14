import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
import Headermenu from './menu/menu';
import CartMenu from './cart/simpleCart';

function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <Headermenu hideCartHandler={props.hideCartHandler}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StoreFront
          </Typography>
          <CartMenu showCartHandler={props.showCartHandler}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
