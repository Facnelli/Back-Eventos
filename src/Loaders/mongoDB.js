const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Banco de dados rodando");
}

module.exports = startDB;
