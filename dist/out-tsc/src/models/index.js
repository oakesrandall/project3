"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Connect
var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres://marshallcreger@localhost:5432/food_tinder');
var User = sequelize.import("./user");
var Restaurant = sequelize.import("./restaurant");
var Transactions = sequelize.import("./transactions");
// User.hasMany(Restaurant);
// Restaurant.hasOne(User);
// Restaurant.belongsTo(User);
// User.hasMany(Restaurant);
User.hasMany(Transactions);
//Transactions.hasMany(User);
Restaurant.hasMany(Transactions);
//Transactions.hasMany(Restaurant);
var db = {};
exports.db = db;
db.models = {
    User: User,
    Restaurant: Restaurant,
    Transactions: Transactions
};
//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//# sourceMappingURL=index.js.map