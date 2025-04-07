const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectController');

router.get('/', projectsController.getProjects);
router.post('/', projectsController.createProject);

module.exports = router;

