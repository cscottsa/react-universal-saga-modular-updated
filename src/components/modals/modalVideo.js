import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';

import { IconClose } from 'components';

import { hideVideoModal } from '../../modules/modals/actions';

class ModalVideo extends Component {
  onVideoClick() {
    const $video = $('video');
    if ($video.get(0).paused) {
      $video.get(0).play();
    } else {
      $video.get(0).pause();
    }
  }

  onPlay() {
    $('.video').children('.video__play-btn').removeClass('is-active');
  }

  onPause() {
    $('.video').children('.video__play-btn').addClass('is-active');
  }

  render() {
    if (this.props.showModalVideo) {
      return (
        <div>
          <div className="modal-bg is-active" />
          <div className="modal is-active">
            <div className="modal__container">
              <button title="Close (Esc)" type="button" className="modal__close">
                <i className="icon icon-hover--grey" onClick={this.props.hideVideoModal}>
                  <IconClose />
                </i>
              </button>
              <div className="modal__center">
                <div className="modal-video">
                  <div className="modal-video__content">
                    <div className="video">
                      <video width="1260" id="video-tag" className="img-responsive" onPlay={this.onPlay} onPause={this.onPause} controls>
                        <source src={this.props.mp4Url} type="video/mp4" />
                        <p>Your browser does not support HTML5 video.</p>
                      </video>
                      <a className="video__play-btn is-active">
                        <i className="icon icon-hover--dark-green2" onClick={this.onVideoClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20">
                            <g fill="none" fillRule="evenodd">
                              <circle className="fill" cx="10" cy="10" r="10" fill="#78B928" />
                              <polygon fill="#FFF" points="7.4 7.2 11 12.8 14.6 7.2" transform="rotate(-90 11 10)" />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    showModalVideo: state.modals.showModalVideo
  };
}

export default connect(mapStateToProps, { hideVideoModal })(ModalVideo);

ModalVideo.propTypes = {
  showModalVideo: PropTypes.bool,
  hideVideoModal: PropTypes.func,
  mp4Url: PropTypes.string,
};
