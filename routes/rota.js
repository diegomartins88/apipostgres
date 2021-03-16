const { Router } = require('express');
const router = Router();



const { getEstabelecimento, createEstabelecimento, getEstabelecimentoById, deleteEstabelecimento, updateEstabelecimento } = require('../config/index.config')

router.get('/estabelecimento', getEstabelecimento);
router.get('/estabelecimento/:cod_estabelecimento', getEstabelecimentoById);
router.post('/estabelecimento', createEstabelecimento);
router.delete('/estabelecimento/:cod_estabelecimento' , deleteEstabelecimento);
router.put('/estabelecimento/:cod_estabelecimento', updateEstabelecimento);


module.exports = router;