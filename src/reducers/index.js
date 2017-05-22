//Reducers directory
import { combineReducers } from 'redux';
import TechsReducer from './TechsReducer';

export default combineReducers({
  techs: TechsReducer
});
