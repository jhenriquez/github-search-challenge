import React from 'react';
import { mount } from 'enzyme';

import { RepositorySearch, mapStateToProps } from './repository-search.container';
import SearchBox from 'components/searchbox';
import Loader from 'components/loader';
import { getApplicationInitialState } from 'store/index';
import { getInitialState } from 'reducers/search.reducer';

describe('RespositorySearch', () => {

  describe('Initial State', () => {

    test('Props: { search: { isSearching: false, results: [], text: "" } }(', () => {
      const component = mount(<RepositorySearch />);
      expect(component.props()).toEqual(expect.objectContaining(getInitialState()));
    });

    describe('<SearchBox />', () => {

      test('It renders a <SearchBox /> component.', () => {
        const component = mount(<RepositorySearch />);
        expect(component.find(SearchBox)).toHaveLength(1);
      });

      test('It binds "value" prop to the its own "text" prop.', () => {
        const component = mount(<RepositorySearch />);
        component.setProps({ text: 'Some value' });
        const searchBox = component.find(SearchBox);
        expect(searchBox.props().value).toEqual("Some value");
      });

      test('It binds to the onChange event', () => {
        const component = mount(<RepositorySearch />);
        const searchBox = component.find(SearchBox);
        expect(searchBox.props().onChange).toBeDefined();
      });

    });

    describe('<Loader />', () => {
      test('It renders a <Loader /> component when "isSearching"', () => {
        const component = mount(<RepositorySearch />);
        expect(component.find(Loader)).toHaveLength(0);
        component.setProps({ isSearching: true });
        expect(component.find(Loader)).toHaveLength(1);
      });
    });

  });

  describe('Redux', () => {
    test('mapStateToProps: It maps to the search attribute in the state', () => {
      const componentProps = mapStateToProps(getApplicationInitialState());
      expect(componentProps).toEqual(getInitialState());
    });

  });

});