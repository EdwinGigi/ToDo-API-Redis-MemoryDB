"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
// Redis connection import
const redis_client_1 = __importDefault(require("./db/redis.client"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Start the server
const PORT = process.env.PORT || 3000;
app.use('/api/', todosRoutes_1.default);
app.listen(PORT, async () => {
    await (0, redis_client_1.default)();
    console.log(`Server listening on port ${PORT}`);
});
exports.default = app;
