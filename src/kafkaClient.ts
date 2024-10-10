import { Kafka } from "kafkajs";

let kafka:Kafka|null = null

const kafkaInit = ()=>{
    try {
        if(!kafka){
            kafka = new Kafka({
                brokers: ["localhost:9092"],
                clientId: "my-app",
            });
        }
        return kafka;
    } catch (error:any) {
        console.log(`Error Connecting To Kafka Client Error: ${error}`)
    }
}


export default kafkaInit()