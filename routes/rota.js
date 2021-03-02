const { Router } = require('express');
const router = Router();



const { gettransacao, createUser, getUserById, deleteUser, updateUser } = require('../config/index.config')

router.get('/transacao', gettransacao);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id' , deleteUser);
router.put('/users/:id', updateUser);



module.exports = router;