const { Schema, model } = require("mongoose");

const user = new Schema(
  {
    strategyId: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
    },
    guilds: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", user);