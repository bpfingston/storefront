import axios from 'axios'

let initialState = {
  products: [
    {
      productName: 'Scooter',
      description: 'smol Kitten wit large eyes',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
      category: 'Animal',
      cost: 1,
      quantity: 20,
      quantityOfCart:0
    },
    {
      productName: 'Big Chungus',
      description: 'hes a bigboi',
      imageUrl:
        'https://cdn.vox-cdn.com/thumbor/VVXayrypyYIMqiHWIYdL77FRF_o=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22408516/Big_Chungus.png',
      category: 'Meme',
      cost: 1,
      quantity: 30,
      quantityOfCart:0
    },
    {
      productName: 'Venom',
      description: 'Slimy spiderman with teeth',
      imageUrl:
        'https://m.media-amazon.com/images/I/81lEa7vlbSL._AC_SX425_.jpg',
      category: 'Toy',
      cost: 1,
      quantity: 50,
      quantityOfCart:0
    },
  ],
};

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3003/products');

  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data.results
  });
}

function ProductReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'SELECTED_CATEGORY':
      if (payload !== 'All') {
        let filteredItem = initialState.products.filter(
          (product) => product.category === payload
        );
        return {...state, products: filteredItem };
      }
      return initialState;

    case 'ADD_TO_CART':
      let incriment = state.products.map(product => {
        if(product.productName === payload.productName){
          if(product.quantity > 0){
            product.quantityOfCart += 1;
            product.quantity--;
          } else {
            alert('Item out of stock')
          }
        }
        return product;
      })
      return{...state, products: incriment};
    case 'FETCH_PRODUCTS':
      return{...state, products: payload}
    default:
      return state;
  }
}


export default ProductReducer;
