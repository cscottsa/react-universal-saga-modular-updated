import {
  FETCH_TOPICS,
} from './constants';

export function fetchTopics() {
  return {
    type: FETCH_TOPICS,
  };
}

export default {
  fetchTopics,
};
