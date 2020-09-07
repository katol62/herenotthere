"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv = require("dotenv");
var ENV = 'dev'; // TODO change to process.env.NODE_ENV
dotenv.config();
exports.config = {
    env: ENV,
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    },
    secret: process.env.JWT_SECRET,
    tokenExpireIn: 86400
};
exports.default = exports.config;
