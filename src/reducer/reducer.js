import { SET_AUTH } from './types';


export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        auth: action.data
      };
    default:
      return state;
  }
}