const usuarioModel = require("../Models/usuarioModel");

class usuarioController {
  async create(req, res) {
    try {
      const usuario = await usuarioModel.create(req.body);

      const { senha, ...usuarioMenosSenha } = usuario.toObject();

      return res.status(200).json(usuarioMenosSenha);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/UsuarioController: Falha no create =(", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const usuario = await usuarioModel.find();

      return res.status(200).json(usuario);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "/UsuarioController: Falha no read =(", error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const usuarioEncontrado = await usuarioModel.findById(id);

      if (!usuarioEncontrado) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      const usuario = await usuarioEncontrado.set(req.body).save();

      return res.status(200).json(usuario);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/UsuarioController: Falha no update =(", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const usuarioEncontrado = await usuarioModel.findById(id);

      if (!usuarioEncontrado) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      await usuarioEncontrado.deleteOne();

      return res.status(200).json({ message: "usuario deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "/UsuarioController: Deu ruim aqui no delete!!", error: error.message });
    }
  }
}

module.exports = new usuarioController();
