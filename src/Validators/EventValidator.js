const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    title: z.string({ required_error: "O titulo é obrigatório" }),
    description: z.string().optional(),
    image: z.string({ required_error: "A imagem é obrigatória" }).url({ message: "Invalid url" }),
    category: z.string({ required_error: "Escolha uma categoria" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
  }),
});

const update = validateRequest({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().url({ message: "Invalid url" }).optional(),
    category: z.string().optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
