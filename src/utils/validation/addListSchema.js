const Joi = require('joi');

const addListSchema = Joi.object({
  todoListTitle: Joi.string().min(1).max(25).required(),
});

module.exports = { addListSchema };
