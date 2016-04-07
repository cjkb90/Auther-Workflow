'use strict';
//Client ID: 675164912357-7m6har0uk5a9ab13c55gtg9s26drmvu9.apps.googleusercontent.com
var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./logins/login.router'));

router.use('/auth', require('./logins/login.router'));

module.exports = router;