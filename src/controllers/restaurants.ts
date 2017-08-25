import { db } from '../models';
var Restaurant = db.models.Restaurants;


function index(req, res) {
	Restaurant.findAll().then(function(restaurants) {
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

const restaurantsController = <any>{};
restaurantsController.index = index;
restaurantsController.show = show;
restaurantsController.create = create;
restaurantsController.update = update;
restaurantsController.destroy = destroy;

export {restaurantsController};
