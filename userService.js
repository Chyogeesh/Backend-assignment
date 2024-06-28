const userDao = require('../dao/userDao');

const createUser = async (userData) => {
    return await userDao.createUser(userData);
};

const getUserById = async (userId) => {
    return await userDao.getUserById(userId);
};

const listUsers = async () => {
    return await userDao.listUsers();
};

const updateUser = async (userId, userData) => {
    return await userDao.updateUser(userId, userData);
};

const patchUser = async (userId, userData) => {
    return await userDao.patchUser(userId, userData);
};

const deleteUser = async (userId) => {
    return await userDao.deleteUser(userId);
};

module.exports = {
    createUser,
    getUserById,
    listUsers,
    updateUser,
    patchUser,
    deleteUser
};
