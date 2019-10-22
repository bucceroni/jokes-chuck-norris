import * as types from '../actions/types';

const initialState = {
  categoriesList: [],
  categoryItem: {}
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_CATEGORIES_LIST}`:
      return {
        ...state,
        categoriesList: payload
      };
    case `${types.GET_CATEGORY_ITEM}`:
      return {
        ...state,
        categoryItem: payload
      };
    default:
      return state;
  }
}
