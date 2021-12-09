let initialState = {
  category: [
  {displayName:'All', normalizedName: 'all', description:'all products'}, 
  {displayName:'Toy', normalizedName: 'toy', description:'all toys'}, 
  {displayName:'Animal',normalizedName:'animal', description:'all animals'},
  {displayName:'MeMe', normalizedName:'meme', description:'all memes'}
  ],
  currentCategory: null,
};

function CategoryReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'SELECTED_CATAGORY':
      if (payload === 'All') {
        return { category: state.category, currentCategory: null };
      } else if (state.category.includes(payload)) {
        return { category: state.category, currentCategory: payload };
      } else {
        return { category: state.category, currentCategory: state.currentCategory }
      }
    default:
      return state;
  }
}


export default CategoryReducer;
