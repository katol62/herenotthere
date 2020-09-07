"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var methodOverride = require("method-override");
var ApiRoutes_1 = require("./routes/ApiRoutes");
var App = /** @class */ (function () {
    function App() {
        this.router = express.Router();
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(methodOverride());
        this.configureRoutes();
    };
    App.prototype.configureRoutes = function () {
        this.router.get('/', function (req, res) {
            return res.status(405).json({ success: false, message: 'Not allowed' });
        });
        this.router.post('/', function (req, res) {
            return res.status(405).json({ success: false, message: 'Not allowed' });
        });
        this.router.put('/', function (req, res) {
            return res.status(405).json({ success: false, message: 'Not allowed' });
        });
        this.configStaticRoutes();
        this.app.use('/api', ApiRoutes_1.apiRoutes.router);
    };
    App.prototype.configStaticRoutes = function () {
        var distDir = '../dist/client';
        this.app.use(express.static(path.join(__dirname, distDir)));
        this.app.use(/^((?!(api)).)*/, function (req, res) {
            res.sendFile(path.join(__dirname, distDir + '/index.html'));
        });
    };
    return App;
}());
exports.default = new App().app;
