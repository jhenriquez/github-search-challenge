import React, { Component } from 'react';

type PropType = {
  value: string;
  onChange?: Function;
};

export default class SearchBox extends Component<PropType, PropType, void> {
  static defaultProps: PropType;

  onChange ({ target }: SyntheticInputEvent) {
    if (this.props.onChange) {
      this.props.onChange(target.value);
    }
  }

  render () {
    return (
      <div className="searchbox">
        <input
          className="searchbox__input"
          placeholder="Search on Github"
          value={ this.props.value }
          onChange={ this.onChange.bind(this) }>
        </input>
      </div>
    );
  }
}

/**
 * If the value is undefined (client didn't provide the prop)
 * the binding is essentially lost.
 */
SearchBox.defaultProps = { value: '' };