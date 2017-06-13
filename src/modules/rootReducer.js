import { combineReducers } from 'redux';
import { errorMessage, router } from './common/reducers';
import landingPageReducer from '../containers/LandingPage/reducer';

const rootReducer = combineReducers({
  errorMessage,
  router,
  landingPage: landingPageReducer,
});

export default rootReducer;
