let initialState = {
  cart: [],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      if (payload) {
          for(var i = 0; i < state.cart.length; i++){
              if (state.cart[i].includes(payload.displayName)) {
                payload.quantityOfCart++;
                return { ...state, totalItems: state.totalItems + 1 };
              } else {
                payload.quantityOfCart = 1;
                state.totalItems++;
                return { ...state, cart: [...state.cart, payload] };
              }

          }
      }
      return initialState;
    case 'DECREASE_FROM_CART':
      if (payload) {
        if (state.cart.includes(payload)) {
          if (payload.quantityOfCart === 1) {
            let item = state.cart.indexOf(payload);
            state.cart.slice(item, 1);
            return { ...state, totalItems: state.totalItems - 1 };
          } else if (payload.quantityOfCart > 1) {
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

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
};

export default cartReducer;
