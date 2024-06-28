const User = require('../models/userModel');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (userId) => {
    return await User.findById(userId).where({ isDeleted: false });
};

const listUsers = async () => {
    return await User.find({ isDeleted: false });
};

const updateUser = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, userData, { new: true }).where({ isDeleted: false });
};

const patchUser = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, { $set: userData }, { new: true }).where({ isDeleted: false });
};

const deleteUser = async (userId) => {
    return await User.findByIdAndUpdate(userId, { isDeleted: true });
};

module.exports = {
    createUser,
    getUserById,
    listUsers,
    updateUser,
    patchUser,
    deleteUser
};
