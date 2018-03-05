import * as SearchActions from 'actions/search.actions';

import type { SearchAction } from 'actions/search.actions';

export const getInitialState = () => {
  return Object.assign({}, {
    isSearching: false,
    results: [],
    text: ''
  });
};

export type SearchStateType = {
  isSearching: boolean;
  results: Array<Object>;
  text: string;
};

const reducer = (state: SearchStateType = getInitialState(), action: SearchAction) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default reducer;