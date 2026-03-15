import jwt from 'jsonwebtoken';
export const validarToken = async (req, res, next) => {
    const token = req.header('Authorization') ?.replace('Bearer ', '');

    if(!token) {
        return res.status(401).json({mensagem: 'Acesso negado. Token não fornecido.'});
    }

    try {
        const secret = process.env.JWT_SECRET || 'chave_segura_evenilson';
        const verificado = jwt.verify(token, secret);
        req.users = verificado;
        next();
    } catch (error) {
        return res.status(400).json({mensagem: 'Acesso negado. Token inválido.'});
    }
}