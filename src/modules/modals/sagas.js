/* eslint-disable no-constant-condition */
import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {
  SHOW_MODAL_VIDEO,
  HIDE_MODAL_VIDEO
} from './actions';

function* showModalVideo() {
  yield put({ type: SHOW_MODAL_VIDEO, payload: true });
}

function* hideModalVideo() {
  yield put({ type: HIDE_MODAL_VIDEO, payload: false });
}

/**
 ****************************** WATCHERS ***********************************
 **/

export function* watchShowVideoModal() {
  yield takeEvery(SHOW_MODAL_VIDEO, showModalVideo);
}

export function* watchHideVideoModal() {
  yield takeEvery(HIDE_MODAL_VIDEO, hideModalVideo);
}

export default {
  watchShowVideoModal,
  watchHideVideoModal
};
