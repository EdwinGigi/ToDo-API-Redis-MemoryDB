import express from "express";
import router from './routes/todosRoutes';
// Redis connection import
import RedisClient  from './db/redis.client';

const app = express();
app.use(express.json());

// Start the server
const PORT = process.env.REDIS_PORT || 3000;

app.use('/', router);

app.get('/', (req, res) => {
  res.send('This is a simple todo app in Typescript + Express.js Framework with Redis to config for AWS MemoryDB');
});

app.listen(PORT, async () => {
  await RedisClient();
  console.log(`Server listening on port http://localhost:${PORT}`);
});

export default app;