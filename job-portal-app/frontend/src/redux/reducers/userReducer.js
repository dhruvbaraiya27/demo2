import * as types from '../types';

const initialState = {
  users: [],
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case types.GET_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}