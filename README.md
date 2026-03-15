# 🚀 API de Gerenciamento de Usuários (CRUD) - Evenilson 

Este é o projeto de Backend desenvolvido por **Evenilson **, focado em demonstrar habilidades de um Desenvolvedor Fullstack na criação de APIs robustas e escaláveis.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework web.
* **PostgreSQL & Neon.tech**: Banco de dados relacional na nuvem.
* **JWT & Bcrypt**: Autenticação e criptografia de senhas.
* **MVC Architecture**: Organização profissional de pastas e arquivos.

## 🚀 Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` com sua `DATABASE_URL` e `JWT_SECRET`.
4. Inicie o servidor: `npm run dev`.

## 🛣️ Rotas Disponíveis (Endpoints)

| Método | Endpoint | Função |
| :--- | :--- | :--- |
| **POST** | `/login` | Realizar login e gerar token |
| **POST** | `/users` | Registrar novo usuário |
| **GET** | `/users` | Listar todos os usuários (Protegida) |
| **PUT** | `/users/:id` | Atualizar dados de um usuário (Protegida) |
| **DELETE** | `/users/:id` | Remover usuário do sistema (Protegida) |

---
💻 Desenvolvido por **Evenilson da silva almeida** | Desenvolvedor Fullstack