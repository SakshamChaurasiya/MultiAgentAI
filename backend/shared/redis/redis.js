import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

try {
    redis.on("connect", () => {
        console.log("redis connected");
    });
} catch (error) {
    console.log("Error connecting redis: ", error);
}


export default redis;