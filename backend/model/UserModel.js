const { model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default || require("passport-local-mongoose");

const { userSchema } = require("../schemas/User");

userSchema.plugin(passportLocalMongoose);
const userModel = model("user", userSchema);

module.exports = { userModel };