import axios from 'axios'

let initialState = {
  category: [
    { displayName: 'All', normalizedName: 'all', description: 'all products' },
    { displayName: 'Toy', normalizedName: 'toy', description: 'all toys' },
    { displayName: 'Animal', normalizedName: 'animal', description: 'all animals' },
    { displayName: 'Meme', normalizedName: 'meme', description: 'all memes' },
  ],
  currentCategory: null,
};
export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3003/categories');

  dispatch({
    type: 'FETCH_CATEGORIES',
    payload: response.data.results
  });
}

function CategoryReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'SELECTED_CATEGORY':
      let selectedCategory = state.category.filter(
        (category) => category.displayName === payload
      )[0];
      return { ...state, currentCategory: selectedCategory.displayName };
    case 'FETCH_CATEGORY':
        return{...state, currentCategory: action.payload}
    default:
      return state;
  }
}

export default CategoryReducer;
