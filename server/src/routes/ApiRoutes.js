"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
var express = require("express");
var ApiAuthRoute_1 = require("./ApiAuthRoute");
var ApiRoutes = /** @class */ (function () {
    function ApiRoutes() {
        this.router = express.Router();
        this.app = express();
        this.config();
    }
    ApiRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) {
            return res.status(405).json({ success: false, message: 'Not allowed!' });
        });
        this.router.put('/', function (req, res) {
            return res.status(405).json({ success: false, message: 'Not allowed' });
        });
        this.router.post('/', function (req, res) {
            return res.status(405).json({ success: false, message: 'Not allowed' });
        });
        this.router.use('/auth', ApiAuthRoute_1.authRoutes.router);
    };
    return ApiRoutes;
}());
exports.apiRoutes = new ApiRoutes();
