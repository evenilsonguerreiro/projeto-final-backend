import express from 'express';
import { registrar, listarUsuarios, deletar, atualizar,login } from '../controllers/UsersController.js';
import { validarToken }  from '../middlewares/validarToken.js';

const router = express.Router();

// rotas publicas //
router.post('/users', registrar);
router.post('/login', login);


// rotas privadas //
router.get('/users', validarToken, listarUsuarios);
router.delete('/users/:id', validarToken, deletar);
router.put('/users/:id', validarToken, atualizar);


export default router;