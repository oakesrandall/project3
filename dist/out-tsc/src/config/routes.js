"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.router = router;
var users_1 = require("../controllers/users");
var restaurants_1 = require("../controllers/restaurants");
//User Routes
// index
router.get('/api/users', users_1.usersController.index);
// create new user
router.post('/api/users', users_1.usersController.create);
// Add favorites to user
router.post('/api/favorites', users_1.usersController.addFavorites);
// show
router.get('/api/users/:id', users_1.usersController.show);
// update
router.put('/api/users/:id', users_1.usersController.update);
// destroy
router.delete('/api/users/:id', users_1.usersController.destroy);
//Restaurant Routes
// index
router.get('/api/restaurants', restaurants_1.restaurantsController.index);
// create
router.post('/api/restaurants', restaurants_1.restaurantsController.create);
// show
router.get('/api/restaurants/:id', restaurants_1.restaurantsController.show);
// update
router.put('/api/restaurants/:id', restaurants_1.restaurantsController.update);
// destroy
router.delete('/api/restaurants/:id', restaurants_1.restaurantsController.destroy);
//# sourceMappingURL=routes.js.map