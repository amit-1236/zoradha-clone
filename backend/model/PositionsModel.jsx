const {model} = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema.jsx");

const PositionsModel = model("position", PositionsSchema);

module.exports = {PositionsModel};