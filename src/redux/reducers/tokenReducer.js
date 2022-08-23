import {ADD_USER_TOKEN} from '../constants';
const initialState = {
  token: null,
};
export default function AddToken(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
