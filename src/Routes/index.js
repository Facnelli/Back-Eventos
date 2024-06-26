const { Router } = require("express");
const EventRoutes = require("./EventRoutes");

const routes = Router();

routes.use("/", EventRoutes);

module.exports = routes;
