const express = require('express');
const router = express.Router();
const usersController = require('../controllers/adminUsersController');
const AdminCheck = require('../middlewares/adminCheck');

router.get('/api/admin/users/getAll/:skip/:limit', AdminCheck, usersController.getAll);
router.delete('/api/admin/users/delete/:id',AdminCheck,usersController.del);
router.get('/api/admin/users/getOne/:id', AdminCheck, usersController.getOne); 
router.get('/api/admin/users/search/:q',usersController.search);
router.post('/api/admin/users/role',usersController.updateRole);

module.exports = router;
