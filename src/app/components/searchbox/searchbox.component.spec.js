import React from 'react';
import { mount } from 'enzyme';
import SearchBox from './searchbox.component';

describe('<SearchBox />', () => {

  test('It renders without throwing', () => {
    mount(<SearchBox />);
  });

  test('It defaults "value" to ""', () => {
    const component = mount(<SearchBox />);
    expect(component.props().value).toEqual("");
  });

  describe('<input>', () => {

    test('It renders an <input> element', () => {
      const component = mount(<SearchBox />);
      expect(component.find('input')).toHaveLength(1);
    });

    test('It is bound to the "value" prop', () => {
      const component = mount(<SearchBox value="Some Search Text" />);
      const searchBoxInput = component.find('input');
      expect(searchBoxInput.props().value).toEqual('Some Search Text');
    });

    test('It triggers onChange when changed.', () => {
      const onChange = jest.fn();
      const searchText = "Some Search";
      const component = mount(<SearchBox value={ searchText } onChange={ onChange } />);
      const searchBoxInput = component.find('input');
      searchBoxInput.simulate('change');
      expect(onChange).toHaveBeenCalledWith(searchText);
    });
  });
});