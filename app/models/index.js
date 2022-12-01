const dbConfig = require("../config/db.config.js"); // nuevo
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url; // nuevo
db.orders = require("./order.model.js")(mongoose); // nuevo
db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;