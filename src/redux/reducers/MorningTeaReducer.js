import {ADD_MORNING_TEA} from '../constants';
const initialState = {
  MorningTeaData: [],
};
export default function AddMorningTea(state = initialState, action) {
  switch (action.type) {
    case ADD_MORNING_TEA:
      return {
        ...state,
        MorningTeaData: action.payload,
      };
    default:
      return state;
  }
}
