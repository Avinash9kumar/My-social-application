const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');


router.get('/profile',usersController.profile);
router.get('/sign-Up',usersController.singUp);
router.get('/sign-In',usersController.singIn);
router.post('/create',usersController.create);
module.exports = router;