import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ProductReducer from './product';
import CategoryReducer from './category';
import cartReducer from './cart';
import thunk from './middleware/thunk'

let reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
    cart: cartReducer,
});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;