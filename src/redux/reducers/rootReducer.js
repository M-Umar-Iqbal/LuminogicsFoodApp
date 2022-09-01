import AddToken from './tokenReducer';
import AddMorningTea from './MorningTeaReducer';
import Events from './EventReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  AddToken,
  Events,
  AddMorningTea,
});

export default rootReducer;
