const {model} = require("mongoose");
const {OrdersSchema} = require("../schemas/OrderSchema.jsx");
 


const OrderModel = model("order", OrdersSchema );

module.exports = {OrderModel};

 


