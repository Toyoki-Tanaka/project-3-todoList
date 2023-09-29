const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todo.cjs');


router.get('/list', todoCtrl.index);

router.get('/:id/edit', todoCtrl.edit);

router.post('/new', todoCtrl.create)

router.delete('/list/:id', todoCtrl.del)

router.get('/:id', todoCtrl.show)

module.exports = router;