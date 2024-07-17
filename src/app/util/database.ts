import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to MongoDB");
        return;
    }
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB, { dbName:"AidConnect"});
    console.log("Connected to MongoDB");
    
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
