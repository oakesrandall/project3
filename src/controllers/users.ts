import { db } from '../models';
var User = db.models.User;


function index(req, res) {
	User.findAll().then(function(users) {
		res.json(users);
	});
}

function show(req, res) {

}

function create(req, res) {
	console.log("trying to create user");
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
