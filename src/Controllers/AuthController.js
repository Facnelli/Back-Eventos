const usuarioModel = require("../Models/usuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const usuarioConfirmado = await usuarioModel.findOne({ email: email }).select("+senha");

      if (!usuarioConfirmado) {
        return res.status(403).json({ message: "E-mail ou Senha inválidos" });
      }

      const ehCorespondente = await bcrypt.compare(senha, usuarioConfirmado.senha);

      if (!ehCorespondente) {
        return res.status(403).json({ message: "E-mail ou Senha inválidos" });
      }

      const { senha: hashedSenha, ...usuario } = usuarioConfirmado.toObject();

      const token = jwt.sign(usuario, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN,
      });

      req.usuarioId = usuario._id;

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({
        message: "/AuthController: Falhou na auth =(",
        error: error.message,
      });
    }
  }
}

module.exports = new authController();
