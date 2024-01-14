const Job = require('../models/JobModel');

exports.createJob = async (req, res) => {
  try {
    const { title, description, company } = req.body;
    const job = await Job.create({ title, description, company });
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({ message: 'Get all jobs', jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getJobDetails = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job details retrieved successfully', job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateJob = async (req, res) => {
  try {
    // TODO: Extract the job ID from the request parameters and new details from the request body
    // TODO: Update the job details and send a JSON response with the updated job
    // TODO: If the job is not found, send a 404 response
    // res.json({ message: 'Job updated successfully', job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    // TODO: Extract the job ID from the request parameters and delete the job
    // TODO: If the job is not found, send a 404 response
    // TODO: Send a success response for the deleted job
    // res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.searchJobs = async (req, res) => {
  try {
    // TODO: Extract the search criteria from the request query
    // TODO: Create a regex pattern for the search criteria
    // TODO: Search jobs based on the regex pattern for title, description, or company
    // TODO: Send a JSON response with the search results
    // res.json({ message: 'Search jobs by criteria', jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
