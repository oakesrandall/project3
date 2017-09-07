"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app.server.module.ngfactory");
var express = require("express");
var bodyParser = require("body-parser");
var fs_1 = require("fs");
var path_1 = require("path");
var routes_1 = require("./config/routes");
var PORT = process.env.PORT || 3000;
core_1.enableProdMode();
var app = express();
app.use(bodyParser.json());
app.use(routes_1.router);
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
app.listen(PORT, function () {
    console.log("listening on http://localhost:" + PORT + "!");
});
//# sourceMappingURL=server.js.map