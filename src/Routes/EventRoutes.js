const { Router } = require("express");

const eventController = require("../Controllers/EventController");
const eventValidator = require("../Validators/EventValidator");

const eventRoutes = Router();

eventRoutes
  .route("/")
  .get(eventController.read)
  .post(eventValidator.create, eventController.create);

eventRoutes
  .route("/:id")
  .put(eventValidator.update, eventController.update)
  .delete(eventValidator.destroy, eventController.delete);

module.exports = eventRoutes;
