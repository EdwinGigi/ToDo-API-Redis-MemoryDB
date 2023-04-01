"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisSet = exports.redisGet = exports.redisClient = void 0;
const redis_1 = require("redis");
const util_1 = require("util");
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create Redis client and promisify Redis functions
exports.redisClient = (0, redis_1.createClient)({
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379,
});
exports.redisGet = (0, util_1.promisify)(exports.redisClient.get).bind(exports.redisClient);
exports.redisSet = (0, util_1.promisify)(exports.redisClient.set).bind(exports.redisClient);
// Connect to Redis and start the server
exports.redisClient.on("connect", () => {
    console.log("Connected to Redis");
    const PORT = process.env.PORT || 3000;
    app_1.default.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
// Handle Redis errors
exports.redisClient.on("error", (err) => {
    console.error(err);
});
