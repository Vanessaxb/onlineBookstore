const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);

// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

//Get /api/items/create
router.post('/', itemsCtrl.create)

// //Get /api/items/update
// router.put('/update', itemsCtrl.update)

// //Get /api/items/delete
// router.delete('/delete', itemsCtrl.delete)

module.exports = router;