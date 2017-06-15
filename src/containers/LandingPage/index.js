import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Landing, CarouselTopics } from 'components';

import { fetchTopics } from './actions';


class LandingPage extends Component {

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    console.log('topics', this.props.topics);

    return (
      <main className="page-content">
        <Landing />
        <CarouselTopics />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  fetchTopics: state.fetchTopics,
  topics: state.topics
});

export default connect(mapStateToProps, {
  fetchTopics
})(LandingPage);

LandingPage.propTypes = {
  fetchTopics: PropTypes.func,
  topics: PropTypes.object
};
