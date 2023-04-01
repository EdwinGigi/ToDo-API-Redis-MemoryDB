"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_controller_1 = require("../controllers/todos.controller");
const router = express_1.default.Router();
// Define routes
router.get("/", todos_controller_1.getTodo);
router.post("/", todos_controller_1.createTodo);
router.put("/:id", todos_controller_1.updateTodo);
router.delete("/:id", todos_controller_1.deleteTodo);
exports.default = router;
