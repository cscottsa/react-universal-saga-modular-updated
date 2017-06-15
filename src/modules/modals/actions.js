export const SHOW_MODAL_VIDEO = 'show_modal_video';
export const HIDE_MODAL_VIDEO = 'hide_modal_video';

export function showVideoModal() {
  return {
    type: SHOW_MODAL_VIDEO
  };
}

export function hideVideoModal() {
  return {
    type: HIDE_MODAL_VIDEO
  };
}

// HOW DOES THIS WORK? :/ (Chris)
export const action = (type, payload = {}) => ({ type, ...payload });

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE';
export const NAVIGATE = 'NAVIGATE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const updateRouterState = state => action(UPDATE_ROUTER_STATE, { state });
export const navigate = pathname => action(NAVIGATE, { pathname });
export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
