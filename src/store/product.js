let initialState = {
  products: [
    {
      productName: 'Scooter',
      description: 'smol Kitten wit large eyes',
      pictureURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
      category: 'animal',
      cost: 1,
      quantity: 1,
    },
    {
      productName: 'Big Chungus',
      description: 'hes a bigboi',
      pictureURL:
        'https://cdn.vox-cdn.com/thumbor/VVXayrypyYIMqiHWIYdL77FRF_o=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22408516/Big_Chungus.png',
      category: 'MeMe',
      cost: 1,
      quantity: 1,
    },
    {
      productName: 'Venom',
      description: 'Slimy spiderman with teeth',
      pictureURL:
        'https://m.media-amazon.com/images/I/81lEa7vlbSL._AC_SX425_.jpg',
      category: 'toy',
      cost: 1,
      quantity: 1,
    },
  ],
};

function ProductReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'SELECTED_CATAGORY':
      if (payload) {
        let filteredItem = state.products.filter(
          (product) => product.category === payload
        );
        return { products: filteredItem };
      }
      return initialState;
    default:
      return state;
  }
}

export default ProductReducer;
