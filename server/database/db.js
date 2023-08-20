import mongoose from "mongoose";


const Connection = async (USERNAME, PASSWORD) => {
    
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-rwbxxic-shard-00-00.umqwr0r.mongodb.net:27017,ac-rwbxxic-shard-00-01.umqwr0r.mongodb.net:27017,ac-rwbxxic-shard-00-02.umqwr0r.mongodb.net:27017/?ssl=true&replicaSet=atlas-sgydxz-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;
