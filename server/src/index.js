"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./misc/config");
var app_1 = require("./app");
app_1.default.listen(config_1.default.port, function () {
    console.log("server is listening on " + config_1.default.port);
});
