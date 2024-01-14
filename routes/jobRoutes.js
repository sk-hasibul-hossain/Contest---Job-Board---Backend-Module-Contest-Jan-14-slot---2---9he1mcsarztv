const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/create', jobController.createJob);
router.get('/search', jobController.searchJobs);
router.get('/all', jobController.getAllJobs);
router.get('/:jobId', jobController.getJobDetails);
router.put('/:jobId', jobController.updateJob);
router.delete('/:jobId', jobController.deleteJob);

module.exports = router;
