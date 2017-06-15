import React, { Component } from 'react';

// import $ from 'jquery';
// import OwlCarousel from 'react-owl-carousel';

import Slider from 'react-slick';

import { CarouselTitle } from 'components';

export default class CarouselTopics extends Component {

  renderTopicItem(item, key) {
    const urlDummyTopicTile = require('../../../theme/images/dummy-topic-tile.png');

    return (
      <div key={key} className="item">
        <a href={item.link} className="tile tile--topic">
          <div className="tile__body shadow-std">
            <img src={urlDummyTopicTile} alt={item.alt} className="img-responsive" />
          </div>
          <div className="tile__tray">
            <p>{ item.title }</p>
          </div>
        </a>
      </div>
    );
  }

  render() {
    const data = {
      title: 'Browe Topics',
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
      slidesToShow: 6,
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
            slidesToShow: 6
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
              return this.renderTopicItem(item, key);
            })
          }
        </Slider>

      </div>
    );
  }
}
