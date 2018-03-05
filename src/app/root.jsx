import 'babel-polyfill';
import './root.css';

import React from 'react';
import reactDOM  from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';

import RepositorySearch from 'containers/repository-search';
import { configureStore, RunSagas } from 'store/index';

const store = configureStore();

RunSagas();

reactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Route exact path="/" component={ RepositorySearch } />
    </BrowserRouter>
  </Provider>,
  document.getElementById('content')
);

