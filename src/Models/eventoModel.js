const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventoSchema = new Schema({
  id_usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios",
    unique: true,
  },
  titulo: {
    type: String,
    unique: true,
  },
  descricao: {
    type: String,
  },
  imagem: {
    type: String,
  },
  categoria: {
    type: String,
  },
});

const EventosModel = mongoose.model("eventos", EventoSchema);

module.exports = EventosModel;
