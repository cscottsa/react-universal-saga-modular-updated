import React, { Component } from 'react';

import { ModalVideo, LandingPlayButton } from 'components';

export default class Landing extends Component {
  render() {
    const urlHeaderWelcome2x = require('../../../theme/images/header-welcome@2x.png');
    const urlHeaderWelcomeMobile2x = require('../../../theme/images/header-welcome-mobile@2x.png');
    const urlTopics2x = require('../../../theme/images/topics@2x.png');
    const urlCourses2x = require('../../../theme/images/courses@2x.png');
    const urlMoneyGuru2x = require('../../../theme/images/money-guru@2x.png');

    return (
      <div>

        <div className="landing-video bg-color--background-fadeup">

          <picture className="img-responsive">
            <source srcSet={urlHeaderWelcome2x} media="(min-width: 768px)" />
            <source srcSet={urlHeaderWelcomeMobile2x} />
            <img src={urlHeaderWelcome2x} className="img-responsive" alt="header welcome" />
          </picture>

          <div className="landing-video__content">
            <div className="container-outer">

              <h1>Welcome to<br /><strong>Old Mutual MoneyVersity</strong></h1>

              <div className="landing-video__play">
                <a className="play-btn">
                  <LandingPlayButton />
                </a>
                <p className="caption">Watch the video</p>
              </div>

            </div>
          </div>

        </div>

        <ModalVideo mp4Url="https://www.w3schools.com/html/mov_bbb.mp4" />

        <div className="landing-intro-wrap">
          <div className="container-outer">
            <div className="landing-intro">
              <div className="rte">
                <h2>Make the most of your money with our fun online financial tools</h2>
                <p>To understand and manage your personal finances you need trusted information. Moneyversity is an online financial educational tool that helps you make the most of your money. Interesting and practical videos, calculators, infographics and articles are just a click away.</p>
              </div>
              <div className="landing-intro__btns cf">
                <div className="landing-intro__btns-col">
                  <a href="#placeholderhref" className="btn btn--block btn--lg btn--secondary">View courses</a>
                </div>
                <div className="landing-intro__btns-col">
                  <a href="#placeholderhref" className="btn btn--block btn--lg btn--primary">Sign up now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="landing-section landing-section--title bg-color--background-fadeup">
          <div className="container-outer">

            <h3 className="h1">How it works</h3>
            <div className="row row--flex">
              <div className="col-md-6">
                <div className="landing-section__copy">
                  <div className="rte">
                    <h4 className="h2">Topics</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <a href="#placeholderhref" className="btn btn--md btn--secondary">View topics</a>
                </div>
              </div>
              <div className="col-md-6">
                <img src={urlTopics2x} alt="" className="img-responsive" />
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section landing-section--alt">
          <div className="container-outer">

            <div className="row row--flex">
              <div className="col-md-6">
                <img src={urlCourses2x} alt="" className="img-responsive" />
              </div>
              <div className="col-md-6">
                <div className="landing-section__copy">
                  <div className="rte">
                    <h4 className="h2">Courses</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <a href="#placeholderhref" className="btn btn--md btn--secondary">Browse courses</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section bg-color--background-fadeup">
          <div className="container-outer">

            <div className="row row--flex">
              <div className="col-md-6">
                <div className="landing-section__copy">
                  <div className="rte">
                    <h4 className="h2">Become a Money Guru</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <a href="#placeholderhref" className="btn btn--md btn--secondary">Beginners guide</a>
                </div>
              </div>
              <div className="col-md-6">
                <img src={urlMoneyGuru2x} alt="" className="img-responsive" />
              </div>
            </div>
          </div>
        </section>


        <div className="landing-signup">
          <div className="container-outer">
            <div className="row row--article">
              <div className="col col-1">
                <h2>If you want to become money savvy, <br /><strong>Start learning now!</strong></h2>
                <a href="#placeholderhref" className="btn btn--lg btn--primary">Sign up now</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
