const { Router } = require("express");

const eventosController = require("../Controllers/eventoController");
const eventoValidator = require("../Validators/eventoValidator");
//const JWTVerify = require("./Middlewares/JWTVerify");
//const usuarioVerify = require("./Middlewares/usuarioVerify");

const eventoRoutes = Router();

eventoRoutes
  .route("/")
  .get(eventosController.read)
  .post(eventoValidator.create, eventosController.create);

eventoRoutes
  .route("/:id")
  .put(eventoValidator.update, eventosController.update)
  .delete(eventoValidator.destroy, eventosController.delete);

module.exports = eventoRoutes;
