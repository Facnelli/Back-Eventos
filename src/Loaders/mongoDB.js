const mongoose = require("mongoose");

async function startDB() {
  console.log(process.env.URI_MONGO);
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Banco de dados rodando");
}

module.exports = startDB;
