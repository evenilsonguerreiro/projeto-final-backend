import express from 'express';
import { registrar,listarUsuarios,deletar,atualizar } from '../controllers/UsersController.js';

const router = express.Router();

router.post('/users', registrar);
router.get('/users', listarUsuarios);
router.delete('/users/:id', deletar);
router.put('/users/:id', atualizar);

export default router;