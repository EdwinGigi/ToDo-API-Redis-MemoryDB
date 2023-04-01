"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_om_1 = require("redis-om");
require("dotenv/config");
// Create a Redis client instance
async function default_1() {
    const url = process.env.REDIS_URL;
    const client = new redis_om_1.Client();
    const redisConn = await client.open(url);
    // To check for connection. you can delete it after we have confirmed our connection is successful
    const dbCheck = await client.execute(['PING']);
    console.log(dbCheck);
    // Export the Redis client instance
    return redisConn;
}
exports.default = default_1;