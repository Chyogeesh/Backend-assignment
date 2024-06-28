const express = require('express');
const userController = require('./controllers/userController');
const { authenticate } = require('./middlewares/authMiddleware');

const router = express.Router();

router.get('/user', authenticate, userController.listUsers);
router.get('/user/:userId', authenticate, userController.getUserDetails);
router.post('/user', authenticate, userController.createUser);
router.put('/user/:userId', authenticate, userController.updateUser);
router.patch('/user/:userId', authenticate, userController.patchUser);
router.delete('/user/:userId', authenticate, userController.deleteUser);

module.exports = router;
