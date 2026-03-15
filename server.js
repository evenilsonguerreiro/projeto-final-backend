import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import usersRouter from "./src/routes/UsersRoutes.js";

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Gerenciamento de Usuários - Evenilson da Silva Almeida",
      version: "1.0.0",
      description: "Documentação da API CRUD para o projeto final",
    },
    servers: [{ url: `http://localhost:${process.env.PORT || 3000}` }],
    paths: {
      "/login": {
        post: {
          summary: "Realiza o login e retorna um Token JWT",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string" },
                    senha: { type: "string" }
                  }
                }
              }
            }
          },
          responses: { 
            200: { description: "Login realizado com sucesso" },
            401: { description: "E-mail ou senha incorretos" }
          }
        }
      },
      "/users": {
        get: {
          summary: "Lista todos os usuários",
          responses: { 200: { description: "Sucesso" } }
        },
        post: {
          summary: "Cria um novo usuário",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                    senha: { type: "string" }
                  }
                }
              }
            }
          },
          responses: { 201: { description: "Criado" } }
        }
      },
      "/users/{id}": {
        put: {
          summary: "Atualiza um usuário",
          parameters: [{ in: "path", name: "id", required: true, schema: { type: "integer" } }],
          responses: { 200: { description: "Atualizado" } }
        },
        delete: {
          summary: "Remove um usuário",
          parameters: [{ in: "path", name: "id", required: true, schema: { type: "integer" } }],
          responses: { 200: { description: "Removido" } }
        }
      }
    }
  },
  apis: [], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(usersRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ mensagem: "Servidor rodando com sucesso (projeto-final-backend)" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Servidor rodando na porta ${PORT}`);
  console.log(` Documentação disponível em http://localhost:${PORT}/api-docs`);
});
