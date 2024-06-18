const { Router } = require("express");

const usuarioController = require("./Controllers/usuarioController");

const rotas = Router();

//Usuarios
rotas.post("/usuarios", usuarioController.create);

rotas.get("/usuarios", usuarioController.read);

rotas.delete("/usuarios/:id", usuarioController.delete);

rotas.put("/usuarios/:id", usuarioController.update);

//Eventos
// rotas.post("/eventos/:id_usuario");

// rotas.get("/eventos");

// rotas.delete("/eventos/:id_usuario");

// rotas.put("/usuarios/:id_usuario");

module.exports = rotas;
