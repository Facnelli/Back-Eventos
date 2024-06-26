const eventModel = require("../Models/eventModel");

class eventController {
  async create(req, res) {
    try {
      const event = await eventModel.create(req.body);

      return res.status(200).json(event);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventController: Falha no create =(", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const event = await eventModel.find();
      return res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ message: "/EventController: Falha no read =(", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const event = await eventModel.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json(event);
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventController: Falha no update =(", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      await eventModel.findByIdAndDelete(id);

      return res.status(200).json({ mensage: "Evento deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "/EventController: Falha no delete =(", error: error.message });
    }
  }
}

module.exports = new eventController();
