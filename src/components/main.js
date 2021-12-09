import React from 'react';
import Products from './categories/products';
import { Box, Divider } from '@mui/material';

function Main() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Divider />
      <Products />
    </Box>
  );
}


export default Main;
