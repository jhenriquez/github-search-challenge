import { combineReducers } from 'redux';

import { default as SearchReducer } from './search.reducer';

const reducers = {
  search: SearchReducer
};

export default combineReducers(reducers);