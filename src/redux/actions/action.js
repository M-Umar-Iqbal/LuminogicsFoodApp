import {ADD_USER_TOKEN, ADD_MORNING_TEA} from '../constants';
export const AddToken = token => {
  return {
    type: ADD_USER_TOKEN,
    payload: token,
  };
};

export const AddMorningTea = MorningTea => {
  return {
    type: ADD_MORNING_TEA,
    payload: MorningTea,
  };
};
