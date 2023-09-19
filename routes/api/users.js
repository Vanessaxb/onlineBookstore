const express = require('express');
const usersCtrl = require('../../controllers/api/users');
const ensuredLoggedIn = require('../../config/ensureLoggedIn')
const router = express.Router();

// POST /api/users
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

router.get('/check-token', ensuredLoggedIn, usersCtrl.checkToken)

// GET /api/users/check-token
// router.get('/check-token', usersCtrl.checkToken);

router.get('/', )

module.exports = router;