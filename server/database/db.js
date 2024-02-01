import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-8jy41qk-shard-00-00.r5ytc37.mongodb.net:27017,ac-8jy41qk-shard-00-01.r5ytc37.mongodb.net:27017,ac-8jy41qk-shard-00-02.r5ytc37.mongodb.net:27017/?ssl=true&replicaSet=atlas-13t8vm-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true,
        })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;