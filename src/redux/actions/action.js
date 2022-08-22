import {ADD_USER_TOKEN} from '../constants';
export const AddToken = token => {
  return {
    type: ADD_USER_TOKEN,
    payload: token,
  };
};
