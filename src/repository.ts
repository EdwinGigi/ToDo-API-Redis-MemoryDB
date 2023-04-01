import { Entity, Schema } from 'redis-om';
import redisClient  from './db/redis.client';

class ToDoList extends Entity {}

const ToDoListSchema = new Schema(ToDoList, {
    name: { type: 'string'},
    completed: { type: 'string' },
    category: { type: 'string' },
    date: { type: 'date' },
},{
    dataStructure: 'JSON'
});


const setup = async () => {
    const ToDoListRepo = (await redisClient()).fetchRepository(ToDoListSchema)
    await ToDoListRepo.createIndex()
    return ToDoListRepo;

}

export default setup