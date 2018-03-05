import reducer, { getInitialState as getSearchInitialState } from './search.reducer.js';
import * as SearchActions from 'actions/search.actions';

describe('Reducer: Search', () => {

  test('It returns the initial state when provided with an undefined value for it.', () => {
    const nextState = reducer(undefined, new SearchActions.DefaultAction());
    expect(nextState).toEqual(getSearchInitialState());
  });

});