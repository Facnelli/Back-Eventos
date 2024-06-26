const express = require("express");
const cors = require("cors"); //para linkagem
const routes = require("./Routes/index");
const eventRoutes = require("./Routes/EventRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada` });
});

module.exports = app;
