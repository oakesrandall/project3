
// import 'reflect-metadata';
// import 'zone.js/dist/zone-node';
// import { platformServer, renderModuleFactory } from '@angular/platform-server'
// import { enableProdMode } from '@angular/core'
// import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server-module.ngfactory'
// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import { readFileSync } from 'fs';
// import { join } from 'path';


// import { router as foodrRouter } from './config/routes';

// const PORT = 3000;

// enableProdMode();

// const app = express();

// app.use(bodyParser.json());

// app.use(foodrRouter);

// app.engine('html', (_, options, callback) => {
//   const opts = { document: template, url: options.req.url };


  // renderModuleFactory(AppServerModuleNgFactory, opts)
  //   .then(html => callback(null, html));

//   renderModuleFactory(AppServerModuleNgFactory, opts)
//     .then(html => callback(null, html));
// });


// app.set('view engine', 'html');
// app.set('views', 'src')

// app.get('*.*', express.static(join(__dirname, '..', 'dist')));

// app.get('*', (req, res) => {
//   res.render('index', { req });
// });

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Express server is up`);
// });