import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import loan from './loans';

export default combineReducers({
  signup,
  login,
  loan,
});
