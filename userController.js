const userService = require('../services/userService');
const userValidator = require('../validators/userValidator');

const listUsers = async (req, res) => {
    const users = await userService.listUsers();
    res.json(users);
};

const getUserDetails = async (req, res) => {
    const userId = req.params.userId;
    const user = await userService.getUserById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

const createUser = async (req, res) => {
    const { error } = userValidator.validateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const { error } = userValidator.validateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await userService.updateUser(userId, req.body);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

const patchUser = async (req, res) => {
    const userId = req.params.userId;
    const { error } = userValidator.validatePatch(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await userService.patchUser(userId, req.body);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    await userService.deleteUser(userId);
    res.status(204).send();
};

module.exports = {
    listUsers,
    getUserDetails,
    createUser,
    updateUser,
    patchUser,
    deleteUser
};
