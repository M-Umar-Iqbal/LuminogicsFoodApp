import AddToken from './tokenReducer';
import AddMorningTea from './MorningTeaReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  AddToken,
  AddMorningTea,
});

export default rootReducer;
