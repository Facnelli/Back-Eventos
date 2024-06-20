const { Router } = require("express");
const eventoRoutes = require("./eventoRoutes");
//import usuarioRoutes from "./userRoutes";
//import loginRoutes from "./loginRoutes";

const routes = Router();

routes.use("/", eventoRoutes); //.use("/usuarios", usuarioRoutes).use("/login", loginRoutes);

module.exports = routes;
