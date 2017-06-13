import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTopics } from './actions';

class LandingPage extends Component {

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    console.log('topics', this.props.topics);
    return (
      <div>
        <h1>Welcome to Old Mutual Moneyversity</h1>
        <h2>This is the landing Page</h2>
      </div>
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

