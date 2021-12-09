import {createStore, combineReducers} from 'redux';

import productReducer from './product';
import { categoryReducer } from './category';

let reducers = combineReducers({
    category: categoryReducer,
    product: productReducer,
});

const Store = () => {
    return createStore(reducers);
}

export default Store;