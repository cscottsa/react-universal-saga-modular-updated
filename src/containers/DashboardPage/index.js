import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardPage extends Component {

  render() {
    return (
      <div>
        <h2>This is the Dashboard Page</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchTopics: state.fetchTopics,
  topics: state.topics
});

export default connect(mapStateToProps, {
})(DashboardPage);
