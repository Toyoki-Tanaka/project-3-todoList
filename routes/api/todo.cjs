const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo.cjs');

// GET /api/items
router.get('/', todoCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);

module.exports = router;