import * as api from '../api/api';
import * as types from './types';

export function getCategoriesList() {
  return async dispatch => {
    dispatch({
      type: types.GET_CATEGORIES_LIST,
      payload: await api.getCategoriesList()
    });
  };
}

export function getCategoryItem(category) {
  return async dispatch => {
    dispatch({
      type: types.GET_CATEGORY_ITEM,
      payload: await api.getCategoryItem(category)
    });
  };
}
