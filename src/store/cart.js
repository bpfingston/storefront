let initialState = {
  cart: [],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      if (payload.quantity === 0) {
        return state;
      } else {
        return {
          cart: [...state.cart, payload.productName],
          totalItems: state.totalItems + 1,
        };
      }
    case 'DECREASE_FROM_CART':
      if (payload) {
        console.log(payload)
        while  (state.cart.includes(payload.productName)) {
          console.log(payload.productName)
          if (payload.quantityOfCart === 1) {
            let item = state.cart.indexOf(payload);
            state.cart.slice(item, 1);
            return { ...state, totalItems: state.totalItems - 1 };
          } else if (payload.quantityOfCart > 1) {
            payload.quantity++;
            payload.quantityOfCart--;
            return { ...state, totalItems: state.totalItems - 1 };
          } else {
            return { ...state, cart: [...state.cart] };
          }
        }
      }
      return initialState;
    default:
      return state;
  }
}

export default cartReducer;
