"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("../repository"));
class todoController {
}
_a = todoController;
todoController.createToDo = async (req, res, next) => {
    try {
        const result = await (await (0, repository_1.default)()).createAndSave(req.body);
        return res.send({
            status: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = todoController;
