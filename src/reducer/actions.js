import { SET_AUTH } from './types';

//  action creator
export function setAuth(data) {
  return {
    type: SET_AUTH,
    data
  }
}