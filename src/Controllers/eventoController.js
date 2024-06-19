const eventosModel = require("../Models/eventoModel");

class eventosController {
  async create(req, res) {
    try {
      const eventos = await eventosModel.create(req.body);

      return res.status(200).json(eventos);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventosController: Falha no create =(", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const eventos = await eventosModel.find();
      return res.status(200).json(eventos);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventosController: Falha no read =(", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const eventos = await eventosModel.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json(eventos);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventosController: Falha no update =(", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      await eventosModel.findByIdAndDelete(id);

      return res.status(200).json({ mensagem: "Eventos deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventosController: Falha no deleete =(", error: error.message });
    }
  }
}

module.exports = new eventosController();
