import axios from 'axios';

const API_URL = '/api/users';

const getAllUsers = async () => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const userService = {
  getAllUsers
};

export default userService;