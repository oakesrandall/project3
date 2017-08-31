import { db } from '../models';
var User = db.models.User;


function index(req, res) {
	console.log("trying to get all users");
	User.findAll().then(function(users) {
		res.json(users);
	});
}

function show(req, res) {
	console.log('getting user');
	// User.findAll().then(function(users) {
	// 	res.json(users);
	// });
	res.send("index");
}

function create(req, res) {
	console.log("trying to create user");
	res.send("create");
	// User.create(req.body).then(function(user){
  //   if(!user) res.send(res, "not saved");
  //   else res.json(user);
  // });

}

function update(req, res) {

}

function destroy(req, res) {

}

const usersController = <any>{};
usersController.index = index;
usersController.show = show;
usersController.create = create;
usersController.update = update;
usersController.destroy = destroy;

export {usersController};
