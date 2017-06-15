import React, { Component } from 'react';

import { CarouselTopics, CarouselCourses, NewCourse } from 'components';

export default class Dashboard extends Component {
  render() {
    const urlHeaderWelcome2x = require('../../../theme/images/header-welcome@2x.png');
    const urlHeaderWelcomeMobile2x = require('../../../theme/images/header-welcome-mobile@2x.png');
    return (
      <div>

        <div className="started-banner bg-color--background-fadeup">

          <picture className="img-responsive">
            <source srcSet={urlHeaderWelcome2x} media="(min-width: 768px)" />
            <source srcSet={urlHeaderWelcomeMobile2x} />
            <img src={urlHeaderWelcome2x} className="img-responsive" alt="img-response" />
          </picture>

          <div className="started-banner__content">
            <div className="container-outer">
              <div className="started-banner__copy">
                <h1>Getting Started</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl et enim tempus porta sit </p>
                <a href="#placeholderHref" className="btn btn--lg btn--primary">Get started</a>
              </div>
            </div>
          </div>

        </div>

        <CarouselTopics />

        <CarouselCourses />

        <NewCourse />

      </div>
    );
  }
}
