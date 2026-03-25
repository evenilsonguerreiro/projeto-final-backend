import jwt from 'jsonwebtoken';

export const validarToken = async (req, res, next) => {
   
    const authHeader = req.header('Authorization');
    
   
    const token = authHeader?.replace('Bearer', '').trim();

   
    console.log("Header recebido:", authHeader);
    console.log("Token extraído:", token);

  
    if(!token) {
        return res.status(401).json({mensagem: 'Acesso negado. Token não fornecido.'});
    }

    try {
        const secret = process.env.JWT_SECRET;
        const verificado = jwt.verify(token, secret);
        req.users = verificado;
        next();
    } catch (error) {
      
        console.log("Erro no JWT:", error.message); 
        return res.status(400).json({mensagem: 'Acesso negado. Token inválido.'});
    }
}