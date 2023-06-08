const router = require('express').Router();
const usersController = require('../../controllers/users.controller');
const authController = require('../../controllers/auth.controller');

// User Login / Signup
router.post('/login', authController.login);
router.post('/register', authController.register);

// Get Routes
router.get('/', usersController.getUsers)
router.get('/:userId', usersController.getUserById)



module.exports = router;