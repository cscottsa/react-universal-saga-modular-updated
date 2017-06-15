import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IconPlayButton } from 'components';
import { showVideoModal } from '../../../../modules/modals/actions';

class LandingPlayButton extends Component {
  render() {
    return (
      <i className="icon icon-hover--dark-green2" onClick={this.props.showVideoModal}>
        <IconPlayButton />
      </i>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { showVideoModal })(LandingPlayButton);

LandingPlayButton.propTypes = {
  showVideoModal: PropTypes.func
};
