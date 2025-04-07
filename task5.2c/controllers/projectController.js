const projectService = require('../services/projectService');

exports.getProjects = async (req, res) => {
    try {
        const projects = await projectService.getProjects();
        res.json({ statusCode: 200, data: projects, message: "Success" });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving projects" });
    }
};

exports.createProject = async (req, res) => {
    try {
        const project = await projectService.createProject(req.body);
        res.status(201).json({ message: "Project created", data: project });
    } catch (error) {
        res.status(500).json({ message: "Error creating project" });
    }
};



