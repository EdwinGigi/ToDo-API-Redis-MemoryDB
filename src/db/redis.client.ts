import { Client } from "redis-om";
import 'dotenv/config'

// Create a Redis client instance
export default async function() {
  const url = process.env.REDIS_URL
  const client = new Client()
  const redisConn = await client.open(url)
​
  // To check for connection. you can delete it after we have confirmed our connection is successful
  const dbCheck = await client.execute(['PING']);
  console.log(dbCheck)

  // Export the Redis client instance
  return redisConn
}