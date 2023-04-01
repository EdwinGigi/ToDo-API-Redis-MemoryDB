import { Request, Response, NextFunction } from 'express'
import ToDoListRepo from '../repository';

export default class todoController {
    public static createToDo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await (await ToDoListRepo()).createAndSave(req.body)

            return res.send({
                status: 'success',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

    public static getToDoList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await (await ToDoListRepo()).fetch(req.params.id)

            return res.send({
                status: 'success',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

}

