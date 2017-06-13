// import {
//   FETCH_COURSES,
// } from './constants';

function landingPageReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TOPICS_SUCCEEDED':
      return { ...state, courses: action.response.response.payload };
    default:
      return state;
  }
}

export default landingPageReducer;
