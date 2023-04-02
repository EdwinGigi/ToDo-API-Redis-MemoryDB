const path = require('path');
require('dotenv').config();
const config= {
    redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
    }
}
module.exports = config;