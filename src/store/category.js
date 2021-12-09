import React from 'react';

const CategoryContext = React.createContext();

let initialState = {
  category: ['All', 'Toy', 'Animal', 'MeMe'],
  currentCategory: null,
};

function categoryReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'SELECTED_CATAGORY':
      if (payload === 'All') {
        return { categories: state.category, currentCategory: null };
      } else if (state.category.includes(payload)) {
        return { currentCategory: payload };
      }
      break;
    default:
      return state;
  }
}

function CategoryProvider({ children }) {
  return (
    <CategoryContext.Provider value={initialState}>
      {children}
    </CategoryContext.Provider>
  );
}

export { categoryReducer, CategoryProvider, CategoryContext };
