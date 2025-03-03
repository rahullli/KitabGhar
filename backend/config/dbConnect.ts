import mongoose from "mongoose";


const connectDB = async() : Promise<void>=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB connection success: ${connection.connection.host}`)
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;