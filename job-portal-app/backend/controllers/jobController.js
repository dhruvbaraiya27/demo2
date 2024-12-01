import Job from '../models/jobModel.js';

export const createJob = async (req, res) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;

    // Create new job
    const newJob = new Job({
      companyName,
      jobTitle,
      description,
      salary,
      createdBy: req.user._id
    });

    await newJob.save();

    res.status(201).json({ 
      message: 'Job created successfully', 
      job: newJob 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    // Fetch all jobs
    const jobs = await Job.find({}).populate('createdBy', 'fullName email');
    
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
};