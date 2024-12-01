import * as types from '../types';
import userService from '../../services/userService';

export const getAllUsers = () => async (dispatch) => {
  try {
    const data = await userService.getAllUsers();
    
    dispatch({
      type: types.GET_USERS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: types.GET_USERS_FAIL,
      payload: error.response?.data?.message || 'Failed to fetch users'
    });
  }
};