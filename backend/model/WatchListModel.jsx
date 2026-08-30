const {model} = require("mongoose");
const {WatchListSchema} = require("../schemas/WatchListSchema.js");

const WatchListModel = model("watchlist", WatchListSchema);

module.exports = {WatchListModel};

