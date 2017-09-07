"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var Restaurant = models_1.db.models.Restaurants;
function index(req, res) {
    Restaurant.findAll().then(function (restaurants) {
        res.json(restaurants);
    });
}
function show(req, res) {
}
function create(req, res) {
}
function update(req, res) {
}
function destroy(req, res) {
}
var restaurantsController = {};
exports.restaurantsController = restaurantsController;
restaurantsController.index = index;
restaurantsController.show = show;
restaurantsController.create = create;
restaurantsController.update = update;
restaurantsController.destroy = destroy;
//# sourceMappingURL=restaurants.js.map