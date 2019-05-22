const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/api/users/add', usersController.add);
router.post('/api/users/login', usersController.login);
router.get('/api/users/check/:name', usersController.check);

module.exports = router;
