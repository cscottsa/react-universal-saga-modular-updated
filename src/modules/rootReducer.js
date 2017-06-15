import { combineReducers } from 'redux';
import { errorMessage, router } from './common/reducers';
import landingPageReducer from '../containers/LandingPage/reducer';
import modalReducer from './modals/reducers';

const rootReducer = combineReducers({
  errorMessage,
  router,
  landingPage: landingPageReducer,
  modals: modalReducer
});

export default rootReducer;
