import * as express from 'express';
var router = express.Router();
import { usersController } from '../controllers/users';
import { restaurantsController } from '../controllers/restaurants';

//User Routes

// index
router.get('/api/users', usersController.index);

// create
router.post('/api/users', usersController.create);

// show
router.get('/api/users/:id', usersController.show);

// update
router.put('/api/users/:id', usersController.update);

// destroy
router.delete('/api/users/:id', usersController.destroy);

//Restaurant Routes

// index
router.get('/api/restaurants', restaurantsController.index);

// create
router.post('/api/restaurants', restaurantsController.create);

// show
router.get('/api/restaurants/:id', restaurantsController.show);

// update
router.put('/api/restaurants/:id', restaurantsController.update);

// destroy
router.delete('/api/restaurants/:id', restaurantsController.destroy);


export {router};
