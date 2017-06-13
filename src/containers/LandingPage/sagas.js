import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { api } from 'services';
import { FETCH_TOPICS } from './constants';

function* fetchData() {
  try {
    const response = yield call(api.fetchTopics);
    yield put({ type: 'FETCH_TOPICS_SUCCEEDED', response });
  } catch (e) {
    yield put({ type: 'FETCH_TOPICS_FAILED', e });
  }
}

// Spawn a new task on each new action
function* watchFetchTopics() {
  yield takeEvery(FETCH_TOPICS, fetchData);
}

export default {
  watchFetchTopics
};

