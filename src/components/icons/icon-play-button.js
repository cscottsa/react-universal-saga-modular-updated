import React, { Component } from 'react';

export default class IconPlayButton extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
        <g fill="none" fillRule="evenodd">
          <circle className="fill" cx="10" cy="10" r="10" fill="#78B928" />
          <polygon fill="#FFF" points="7.4 7.2 11 12.8 14.6 7.2" transform="rotate(-90 11 10)" />
        </g>
      </svg>
    );
  }
}
