import { cadastrarUsuario,buscarUsuarioPorEmail,atualizarUsuario } from "../models/UsersModel.js";

export const registrar = async(req,res) => {
    try {
        const {nome,email,senha} = req.body;
        const usuarioJaExiste = await buscarUsuarioPorEmail(email);

        if(usuarioJaExiste) {
            return res.status(400).json({mensagem: 'Este e-mail já está em uso!'});
        }

        const novoUsuario = await cadastrarUsuario(nome,email,senha);
        return res.status(201).json({mensagem: 'Usuário cadastrado com sucesso!'});
        usuario:novoUsuario
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro ao registrar usuário.', erro: error.message});
    }
}

import { listarTodosUsuarios } from '../models/UsersModel.js';
export const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await listarTodosUsuarios();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ 
            mensagem: "Erro ao buscar usuários.", 
            erro: error.message 
        });
    }
};

import { excluirUsuario } from '../models/UsersModel.js';

export const deletar = async (req, res) => {
    try {
        const { id } = req.params; 
        const usuarioDeletado = await excluirUsuario(id);

        if (!usuarioDeletado) {
            return res.status(404).json({ mensagem: "Usuário não encontrado." });
        }

        return res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro ao deletar usuário.", erro: error.message });
    }
};

export const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const usuarioAtualizado = await atualizarUsuario(id, nome, email, senha);
        return res.status(200).json({ mensagem: "Usuário atualizado!", usuario: usuarioAtualizado });
    } catch (error) {
        return res.status(500).json({ erro: error.message });
    }
};

