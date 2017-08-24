import { db } from '../models';
let DB = db.models;

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

var userCreate = function() {
	return DB.User.create({
			email:"asdf",
			password:"asdf"
	})
	.then(function(user){
		DB.Restaurant.bulkCreate(restaurantDummy)
		.then(function(restaurant){
			DB.Transactions.create({
				userId: user.id,
				restaurantId: restaurant,
				likes: 2,
				trigger: false
			})
		});
	})
}

// userCreate()
// .then(function() {
// 	process.exit();
// });
var oneRest = function() {
	return DB.Restaurant.create({
	    name: "lols",
	    url: "www.m.com",
	    address: "789 m ave"
		});
};
oneRest();
