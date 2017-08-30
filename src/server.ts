<<<<<<< HEAD
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
//import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
//import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server-module.ngfactory';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { readFileSync } from 'fs';
import { join } from 'path';
=======
// import 'reflect-metadata';
// import 'zone.js/dist/zone-node';
// import { platformServer, renderModuleFactory } from '@angular/platform-server'
// import { enableProdMode } from '@angular/core'
// import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server-module.ngfactory'
// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import { readFileSync } from 'fs';
// import { join } from 'path';
>>>>>>> 9f7c32f4b50346e1b84284985e783c6affa1c624

// import { router as foodrRouter } from './config/routes';

// const PORT = 3000;

// enableProdMode();

// const app = express();

// app.use(bodyParser.json());

// app.use(foodrRouter);

<<<<<<< HEAD
let template = readFileSync(join(__dirname, '..', 'src', 'index.html')).toString();
=======
// let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();
>>>>>>> 9f7c32f4b50346e1b84284985e783c6affa1c624

// app.engine('html', (_, options, callback) => {
//   const opts = { document: template, url: options.req.url };

<<<<<<< HEAD
  // renderModuleFactory(AppServerModuleNgFactory, opts)
  //   .then(html => callback(null, html));
});
=======
//   renderModuleFactory(AppServerModuleNgFactory, opts)
//     .then(html => callback(null, html));
// });
>>>>>>> 9f7c32f4b50346e1b84284985e783c6affa1c624

// app.set('view engine', 'html');
// app.set('views', 'src')

// app.get('*.*', express.static(join(__dirname, '..', 'dist')));

// app.get('*', (req, res) => {
//   res.render('index', { req });
// });

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Express server is up`);
// });
