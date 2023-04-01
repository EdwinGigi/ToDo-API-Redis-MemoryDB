import express from "express";
import router from './routes/todosRoutes';
// Redis connection import
import RedisClient  from './db/redis.client';

const app = express();
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000;

app.use('/api/', router);

app.listen(PORT, async () => {
  await RedisClient();
  console.log(`Server listening on port ${PORT}`);
});

export default app;