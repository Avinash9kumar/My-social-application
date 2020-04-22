const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');
const passport = require('passport');


router.get('/profile',passport.checkAuthentication ,usersController.profile);
router.get('/sign-up',usersController.singUp);
router.get('/sign-in',usersController.singIn);
router.post('/create',usersController.create);
router.get('/sign-out',usersController.destroySession);

router.post('/create-session',passport.authenticate(
       'local',
    {failureRedirect:'/users/sign-in'},
),usersController.createSession);

module.exports = router;