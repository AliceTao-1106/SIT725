const userService = require('../services/userService');

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({ message: "User saved", data: user });
    } catch (error) {
        res.status(500).json({ message: "Error saving user" });
    }
};
