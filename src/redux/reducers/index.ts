import {combineReducers} from 'redux';
import globalReducer from './GlobalReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  globalReducer: globalReducer,
  AuthReducer: AuthReducer,
});

export default rootReducer;
