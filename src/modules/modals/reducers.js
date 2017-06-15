import {
  SHOW_MODAL_VIDEO,
  HIDE_MODAL_VIDEO
} from './actions';

const INITIAL_STATE = {
  showModalVideo: false
};

export default function modalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_MODAL_VIDEO:
      return { ...state, showModalVideo: true };
    case HIDE_MODAL_VIDEO:
      return { ...state, showModalVideo: false };
    default:
      return { ...state };
  }
}
