import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../redux/actions/jobActions';

const JobsList = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="jobs-list">
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <div key={job._id} className="job-card">
          <h3>{job.jobTitle}</h3>
          <p>Company: {job.companyName}</p>
          <p>Description: {job.description}</p>
          <p>Salary: ${job.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default JobsList;