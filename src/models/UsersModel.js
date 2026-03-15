import sql from '../config/database.js';

export const buscarUsuarioPorEmail = async (email) => {
    const resultado = await sql`SELECT * FROM users_cadastro WHERE email = ${email}
    
    `
    return resultado[0]
}

export const cadastrarUsuario = async(name,email,senha) => {
    const resultado = await sql`INSERT INTO users_cadastro(name,email,senha) VALUES(${name}, ${email}, ${senha})
    RETURNING *

    `
    return resultado[0]
    
}

export const listarTodosUsuarios = async () => {
    const resultado = await sql`SELECT id, name, email FROM users_cadastro`;
    return resultado;
}

export const excluirUsuario = async (id) => {
    const resultado = await sql`
        DELETE FROM users_cadastro 
        WHERE id = ${id} 
        RETURNING *
    `;
    return resultado[0];
};

export const atualizarUsuario = async (id, name, email, senha) => {
    const resultado = await sql`
        UPDATE users_cadastro 
        SET name = ${name}, email = ${email}, senha = ${senha}
        WHERE id = ${id}
        RETURNING *
    `;
    return resultado[0];
};

