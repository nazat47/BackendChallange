import Redis from "ioredis";

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

export default redisClient;
