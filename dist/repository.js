"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_om_1 = require("redis-om");
const redis_client_1 = __importDefault(require("./db/redis.client"));
class ToDoList extends redis_om_1.Entity {
    constructor() {
        super(...arguments);
        this.name = 'ToDoList';
        this.completed = 'completed';
        this.category = 'category';
        this.date = Date.now();
    }
}
const ToDoListSchema = new redis_om_1.Schema(ToDoList, {
    name: { type: 'string' },
    completed: { type: 'string' },
    category: { type: 'string' },
    date: { type: 'date' },
}, {
    dataStructure: 'JSON'
});
const setup = async () => {
    const ToDoListRepo = (await (0, redis_client_1.default)()).fetchRepository(ToDoListSchema);
    await ToDoListRepo.createIndex();
    return ToDoListRepo;
};
exports.default = setup;
