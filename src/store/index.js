import { createStore, combineReducers } from 'redux';

import ProductReducer from './product';
import CategoryReducer from './category';
import cartReducer from './cart';

let reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
    cart: cartReducer,
});

const store = () => {
    return createStore(reducers);
}

export default store;