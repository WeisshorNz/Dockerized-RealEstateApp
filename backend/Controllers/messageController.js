const createError = require("http-errors");
const mongoose = require("mongoose");
const Message = require("../Models/messageModel");

module.exports = {
  getAllMessages: async (req, res, next) => {
    try {
      const results = await Message.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.error(error.message);
      next(error);
    }
  },

  createNewMessage: async (req, res, next) => {
    try {
      const message = new Message(req.body);
      const result = await message.save();
      res.status(201).send(result);
    } catch (error) {
      console.error(error.message);
      if (error.name === "ValidationError") {
        next(createError(422, error.message));
      } else {
        next(error);
      }
    }
  },

  findMessageById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const message = await Message.findById(id);
      if (!message) {
        throw createError(404, "That message does not exist in the database.");
      }
      res.send(message);
    } catch (error) {
      console.error(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid message id"));
      } else {
        next(error);
      }
    }
  },

  updateAMessage: async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    try {
      const result = await Message.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "Message does not exist");
      }
      res.send(result);
    } catch (error) {
      console.error(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Message Id"));
      } else {
        next(error);
      }
    }
  },

  deleteAMessage: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Message.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Message does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.error(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Message id"));
      } else {
        next(error);
      }
    }
  },
};
