import React, { Component } from 'react';

import { IconCourseDifficultyOn, IconCourseDifficultyOff } from 'components';

export default class NewCourse extends Component {
  render() {
    const dummyNewCourseUrl = require('../../../theme/images/wants-needs@2x.png');
    return (
      <section className="started-section bg-color--background">
        <div className="container-outer">

          <div className="row row--flex">
            <div className="col-md-6">
              <div className="started-section__img">
                <img src={dummyNewCourseUrl} alt="shadow-lg img" className="shadow-lg" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="started-section__copy">
                <div className="rte">
                  <p className="title"><strong>New course coming soon</strong></p>
                  <h4 className="h2">Wants vs Needs</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nisl et enim tempus porta sit </p>
                </div>
                <ul className="course-levels tooltip tooltip--intermediate tooltip--bottom" data-tooltip="Intermediate">
                  <li>
                    <i className="icon">
                      <IconCourseDifficultyOn />
                    </i>
                  </li>
                  <li>
                    <i className="icon">
                      <IconCourseDifficultyOn />
                    </i>
                  </li>
                  <li>
                    <i className="icon">
                      <IconCourseDifficultyOff />
                    </i>
                  </li>
                </ul>
                <br />
                <a href="#placeholderHref" className="btn btn--md btn--primary">View course</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
