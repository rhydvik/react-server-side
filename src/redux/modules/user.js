import initialState from '../initialState';
// import { getUserProfile, updateUserProfile } from '../../queries';

// Actions
const GET_PROFILE = 'user/GET-PROFILE';
const UPDATE_PROFILE = 'user/UPDATE-PROFILE';

// Reducer
export default function reducer(state = initialState.user, action = {}) {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function getProfile() {
  return async dispatch => dispatch({type: GET_PROFILE, payload: {}});
}

export function updateProfile(user) {
  return async dispatch => dispatch({type: UPDATE_PROFILE, payload: user});
}
