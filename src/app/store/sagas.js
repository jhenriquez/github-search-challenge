import createSagaMiddleware from 'redux-saga';

import SearchSaga from 'sagas/search.saga';

const sagasEngine = createSagaMiddleware();

export function RunSagas () {
  sagasEngine.run(SearchSaga);
}

export default sagasEngine;