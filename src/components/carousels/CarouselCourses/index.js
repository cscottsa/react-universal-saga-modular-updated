import React, { Component } from 'react';

import Slider from 'react-slick';

import { CarouselTitle, IconCourseDifficultyOn, IconCourseDifficultyOff } from 'components';

export default class CarouselCourses extends Component {

  renderCourseItem(item, key) {
    const urlDummyCourseTile = require('../../../theme/images/dummy-course-tile.png');

    return (
      <div key={key} className="carousel__item item">
        <a href={item.link} className="tile tile--course shadow-std">
          <div className="tile__body">
            <img src={urlDummyCourseTile} alt={item.alt} className="img-responsive" />
          </div>
          <div className="tile__tray cf">
            <p>{item.title}</p>

            {/*classes: .tooltip--beginner .tooltip--intermediate .tooltip--advanced*/}
            <ul className="course-levels tooltip tooltip--beginner tooltip--top" data-tooltip="Beginner">
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
              <li>
                <i className="icon">
                  <IconCourseDifficultyOff />
                </i>
              </li>
            </ul>

          </div>
        </a>
      </div>
    );
  }

  render() {
    const data = {
      title: 'Popular Courses',
      items: [
        {
          link: '#placeholderUrl',
          image: '',  // Dummy image ued in component
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '../../../theme/images/dummy-topic-tile.png',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        },
        {
          link: '#placeholderUrl',
          image: '',
          imageAlt: 'Personal Financial Responsibility image',
          title: 'Personal Financial Responsibility',
        }
      ]
    };

    const settings = {
      accessibility: true,
      dots: false,
      infinite: false,
      arrows: false,
      draggable: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 5
          }
        }
      ]
    };

    return (
      <div className="container-outer slider-outer-container">

        <CarouselTitle title={data.title} />

        <Slider {...settings}>
          {
            data.items.map((item, key) => {
              return this.renderCourseItem(item, key);
            })
          }
        </Slider>

      </div>
    );
  }
}
