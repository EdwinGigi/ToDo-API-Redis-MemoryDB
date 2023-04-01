"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = __importDefault(require("../controllers/todoController"));
const router = express_1.default.Router();
router.post('/todo', todoController_1.default.createToDo);
exports.default = router;
