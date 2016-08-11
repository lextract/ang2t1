import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import {BaseApp} from "./servercommon/BaseApp";
import * as AppsLoader from "./servercommon/AppsLoader";
//import * as Logog from './node_modules/morgan/index.js';
//let morgan = require("morgan");


let eapp = express();
//eapp.use(morgan('dev'));
eapp.use("/node_modules", express.static(path.join(__dirname,"node_modules")));
eapp.use("/clientcommon", express.static(path.join(__dirname,"clientcommon")));
let appsLoaded = AppsLoader.processAppDirs(__dirname,eapp);

var server = eapp.listen(5000, function() {
    console.log("servidor INICIADO!!!");
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

