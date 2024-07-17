import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to MongoDB");
        return;
    }
    let MongoDBUrl:any = process.env.NEXT_PUBLIC_MONGODB
    await mongoose.connect(MongoDBUrl, { dbName:"AidConnect"});
    console.log("Connected to MongoDB");
    
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
