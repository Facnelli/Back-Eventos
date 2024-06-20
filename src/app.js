const express = require("express");
const cors = require("cors"); //para linkagem
const routes = require("./Routes/index");
const eventoRoutes = require("./Routes/eventoRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(eventoRoutes);
app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada` });
});

module.exports = app;
