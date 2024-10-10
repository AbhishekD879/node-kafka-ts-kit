import {Redis} from "ioredis";

let redis:Redis = null

const redisInit = ()=>{
   try{
    if(!redis){
        redis =  new Redis(`rediss://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_ENDPOINT}:6379`)
    }
    return redis;
   }catch(err:any){
        console.log(`Error Connecting To Redis Client Error: ${err}`)
   }
}


export default redisInit()