const express = require('express');
const usersCtrl = require('../../controllers/api/users');
const ensuredLoggedIn = require('../../config/ensureLoggedIn')
const router = express.Router();

// GET /api/users
router.get('/', usersCtrl.index); 

// // GET /api/users/:id
// router.get('/:id', usersCtrl.show);

// POST /api/users
router.post('/', usersCtrl.create);

// //Get /api/users/update
// router.put('/:id', usersCtrl.update)

// //Get /api/users/delete
// router.delete('/:id', usersCtrl.remove)

//POST login
router.post('/login', usersCtrl.login);

//Check Token
router.get('/check-token', ensuredLoggedIn, usersCtrl.checkToken)

// GET /api/users/check-token
// router.get('/check-token', usersCtrl.checkToken);

router.get('/', )

module.exports = router;





