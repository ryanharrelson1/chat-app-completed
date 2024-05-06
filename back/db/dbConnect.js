import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("db connected");
  } catch (error) {
    console.log("error in connecting db", error);
  }
  await mongoose.connect(process.env.Mongo_URI);
};
export default connectDB;
