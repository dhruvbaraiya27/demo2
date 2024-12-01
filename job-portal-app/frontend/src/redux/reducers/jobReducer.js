import * as types from '../types';

const initialState = {
  jobs: [],
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false
      };
    case types.CREATE_JOB_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, action.payload.job],
        loading: false
      };
    case types.GET_JOBS_FAIL:
    case types.CREATE_JOB_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}