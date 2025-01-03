import mongoose from "mongoose";

let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if database id alreary connected dont connect again
  if (connected) {
    console.log("already connected");
    return;
  }
  // connect mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
