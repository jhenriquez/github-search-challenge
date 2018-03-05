import './repository-search.container.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from 'components/searchbox';
import Loader from 'components/loader';
import { getInitialState } from 'reducers/search.reducer';
import * as SearchActions from 'actions/search.actions';

import type { SearchStateType } from 'reducers/search.reducer';
import type { ApplicationState } from 'store/index';

type PropType = SearchStateType & {
  searchTextChanged?: string=>void
};

export class RepositorySearch extends Component<PropType, PropType, void> {
  static defaultProps: PropType;

  render () {
    return (
      <div className="repository-search">
        <SearchBox value={ this.props.text } onChange={ this.props.searchTextChanged } />
        { this.props.isSearching ? <Loader /> : null }
      </div>
    );
  }
}

RepositorySearch.defaultProps = Object.assign({}, getInitialState(), {
  searchTextChanged: ()=>{}
});

export const mapStateToProps = (state: ApplicationState) => state.search;

export default connect(mapStateToProps)(RepositorySearch);