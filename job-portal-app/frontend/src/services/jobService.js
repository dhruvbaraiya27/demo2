import axios from 'axios';

const API_URL = '/api/jobs';

const createJob = async (jobData) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(`${API_URL}/create`, jobData, config);
  return response.data;
};

const getAllJobs = async () => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const jobService = {
  createJob,
  getAllJobs
};

export default jobService;