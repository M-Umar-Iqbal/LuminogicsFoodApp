import {ADD_EVENTS} from '../constants';
const initialState = {
  eventData: null,
};
export default function AddEvents(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENTS:
      return {
        ...state,
        eventData: action.payload,
      };
    default:
      return state;
  }
}
