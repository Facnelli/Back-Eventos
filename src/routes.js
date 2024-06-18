const { Router } = require("express");

const usuarioController = require("./Controllers/usuarioController");
const eventosController = require("./Controllers/eventoController");
const authController = require("./Controllers/AuthController");

const usuarioValidator = require("./Validators/usuarioValidator");
const eventoValidator = require("./Validators/eventoValidator");
const authValidator = require("./Validators/AuthValidator");

const JWTVerify = require("./Middlewares/JWTVerify");
const usuarioVerify = require("./Middlewares/usuarioVerify");

const rotas = Router();

//Usuarios
rotas.post("/usuarios", usuarioValidator.create, usuarioController.create);

rotas.get("/usuarios", JWTVerify, usuarioController.read);

rotas.delete(
  "/usuarios/:id",
  JWTVerify,
  usuarioVerify,
  usuarioValidator.destroy,
  usuarioController.delete
);

rotas.put(
  "/usuarios/:id",
  JWTVerify,
  usuarioVerify,
  usuarioValidator.update,
  usuarioController.update
);

//Eventos
rotas.post("/eventos", JWTVerify, eventoValidator.create, eventosController.create);

rotas.get("/eventos", eventosController.read);

rotas.delete(
  "/eventos/:id_usuario",
  JWTVerify,
  usuarioVerify,
  eventoValidator.destroy,
  eventosController.delete
);

rotas.put(
  "/usuarios/:id_usuario",
  JWTVerify,
  usuarioVerify,
  eventoValidator.update,
  eventosController.update
);

//Login
rotas.post("/login", authValidator.login, authController.login);

module.exports = rotas;
