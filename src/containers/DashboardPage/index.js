import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { Dashboard } from 'components';

class DashboardPage extends Component {

  componentDidMount() {
    // this.props.fetchTopics();
  }

  render() {
    return (
      <main className="page-content">
        <Dashboard />
      </main>
    );
  }
}

const mapStateToProps = () => ({
  // fetchTopics: state.fetchTopics,
  // topics: state.topics
});

export default connect(mapStateToProps, {})(DashboardPage);

// DashboardPage.propTypes = {
//   topics: PropTypes.object
// };
