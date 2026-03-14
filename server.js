import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import usersRouter from './src/routes/UsersRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRouter)

app.get('/', (req,res) => {
    res.status(200).json({mensagem: 'Servidor rodando com sucesso (projeto-final-backend)'});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})