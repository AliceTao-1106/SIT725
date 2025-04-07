const Project = require('../models/Project');

exports.getProjects = async () => {
    return await Project.find({});
};

exports.createProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

