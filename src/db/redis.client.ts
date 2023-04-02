import { Client } from "redis-om";
import 'dotenv/config'

// Create a Redis client instance
export default async function() {
  const host = process.env.REDIS_HOST
  const REDIS_HOST = process.env.REDIS_HOST
  const REDIS_PASSWORD = process.env.PASSWORD
  const client = new Client()
  const redisConn = await client.open(host)

  // To check for connection. you can delete it after we have confirmed our connection is successful
  const dbCheck = await client.execute(['PING']);
  console.log(dbCheck)

  // Export the Redis client instance
  return redisConn
}