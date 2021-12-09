import React from 'react';
import Catagories from './catagories/catagories';
import Product from './catagories/products';
import { Box, Divider } from '@mui/material';

function main() {
  return (
    <Box
      mt={2}
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Catagories />
      <Divider />
      <Product />
    </Box>
  );
}


export default main;
