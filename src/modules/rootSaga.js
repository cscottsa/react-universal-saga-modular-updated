import { fork, join } from 'redux-saga/effects';

// IMPORT ALL SAGA WATCHERS
import { watchFetchTopics } from '../containers/LandingPage/sagas';

// // CUSTOM METHOD FOR USAGE AT server.js TO RUN SAGAS ON SERVER SIDE (e.g. fetch data)
export const waitAll = sagas => function* genTasks() {
  const tasks = yield sagas.map(([saga, ...params]) => fork(saga, ...params));
  yield tasks.map(join);
};
//
// // CONSOLIDATE AND EXPORT ALL SAGAS
export default function* rootSaga() {
  yield [
    watchFetchTopics()
  ];
}
