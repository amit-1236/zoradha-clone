const {model} = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsSchema.jsx");


const HoldingsModel = model("holding", HoldingsSchema);

module.exports = {HoldingsModel};