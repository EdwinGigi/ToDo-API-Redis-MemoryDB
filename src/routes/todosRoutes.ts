import express, { Router } from 'express';
import todoController from '../controllers/todoController';

const router = express.Router();

router.post('/todo', todoController.createToDo);
router.get('/todo/:id', todoController.getToDoList);

export default router