import * as types from '../types';
import authService from '../../services/authService';

export const register = (userData) => async (dispatch) => {
  try {
    const data = await authService.register(userData);
    
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data
    });

    return { type: types.REGISTER_SUCCESS };
  } catch (error) {
    dispatch({
      type: types.REGISTER_FAIL,
      payload: error.response?.data?.message || 'Registration failed'
    });

    throw error;
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const data = await authService.login(userData);
    
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: data
    });

    return { type: types.LOGIN_SUCCESS };
  } catch (error) {
    dispatch({
      type: types.LOGIN_FAIL,
      payload: error.response?.data?.message || 'Login failed'
    });

    throw error;
  }
};

export const logout = () => (dispatch) => {
  authService.logout();
  
  dispatch({
    type: types.LOGOUT
  });
};