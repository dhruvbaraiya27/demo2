import * as types from '../types';
import jobService from '../../services/jobService';

export const createJob = (jobData) => async (dispatch) => {
  try {
    const data = await jobService.createJob(jobData);
    
    dispatch({
      type: types.CREATE_JOB_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.CREATE_JOB_FAIL,
      payload: error.response?.data?.message || 'Job creation failed'
    });
  }
};

export const getAllJobs = () => async (dispatch) => {
  try {
    const data = await jobService.getAllJobs();
    
    dispatch({
      type: types.GET_JOBS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_JOBS_FAIL,
      payload: error.response?.data?.message || 'Failed to fetch jobs'
    });
  }
};