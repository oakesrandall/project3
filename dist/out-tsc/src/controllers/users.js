"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var User = models_1.db.models.User;
function index(req, res) {
    console.log("trying to get all users");
    User.findAll().then(function (users) {
        res.json(users);
    });
}
function show(req, res) {
    res.json('*******show route');
    // User.findAll().then(function(users) {
    // 	res.json(users);
    // });
    //res.send("index");
}
function create(req, res) {
    console.log("trying to create user");
    res.send("create");
    // User.create(req.body).then(function(user){
    //   if(!user) res.send(res, "not saved");
    //   else res.json(user);
    // });
}
function addFavorites(req, res) {
}
function update(req, res) {
}
function destroy(req, res) {
}
var usersController = {};
exports.usersController = usersController;
usersController.index = index;
usersController.show = show;
usersController.create = create;
usersController.update = update;
usersController.destroy = destroy;
usersController.addFavorites = addFavorites;
//# sourceMappingURL=users.js.map