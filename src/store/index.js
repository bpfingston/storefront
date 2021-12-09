import { createStore, combineReducers } from 'redux';

import ProductReducer from './product';
import CategoryReducer from './category';

let reducers = combineReducers({
    category: CategoryReducer,
    product: ProductReducer,
});

const store = () => {
    return createStore(reducers);
}

export default store;