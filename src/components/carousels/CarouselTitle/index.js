import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarouselTitle extends Component {
  render() {
    return (
      <h5 className="slider-outer-container__title">{ this.props.title }</h5>
    );
  }
}

CarouselTitle.propTypes = {
  title: PropTypes.string
};
