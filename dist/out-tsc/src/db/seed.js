"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var DB = models_1.db.models;
var restaurantDummy = [
    {
        name: "burger shack",
        url: "www.b.com",
        address: "123 b st"
    },
    {
        name: "taco truck",
        url: "www.t.com",
        address: "456 t dr"
    },
    {
        name: "mcbangers",
        url: "www.m.com",
        address: "789 m ave"
    },
    {
        name: "asdf",
        url: "www.asdf.com",
        address: "asd m ave"
    }
];
var transactDummy = [
    {
        userId: 1,
        restaurantId: 1,
        likes: 3,
        trigger: false,
        favorite: false
    },
    {
        userId: 1,
        restaurantId: 2,
        likes: 3,
        trigger: false,
        favorite: false
    },
    {
        userId: 1,
        restaurantId: 3,
        likes: 5,
        trigger: true,
        favorite: true
    }
];
var userCreate = function () {
    return DB.User.create({
        email: "asdf",
        password: "asdf"
    })
        .then(function (user) {
        DB.Restaurant.bulkCreate(restaurantDummy)
            .then(function (restaurant) {
            DB.Transactions.create({
                userId: user.id,
                restaurantId: restaurant,
                likes: 2,
                trigger: false
            });
        });
    });
};
// userCreate()
// .then(function() {
// 	process.exit();
// });
var rest = function () {
    return DB.Restaurant.bulkCreate(restaurantDummy);
};
var user = function () {
    return DB.User.create({
        email: "asdf",
        password: "asdf"
    });
};
var transact = function () {
    return DB.Transactions.bulkCreate(transactDummy);
};
rest();
user();
transact();
//# sourceMappingURL=seed.js.map