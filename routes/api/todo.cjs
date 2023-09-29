const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo.cjs');


router.get('/list', todoCtrl.index);
// GET /api/items/:id
router.get('/:id', todoCtrl.show);

router.post('/new', todoCtrl.create)


module.exports = router;