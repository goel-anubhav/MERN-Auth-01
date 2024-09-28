import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    console.log("mongo_uri", process.env.Mongo_URI);
    const conn = await mongoose.connect(process.env.Mongo_URI);
    console.log(`Mongo Db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Mongobd error", error.message);
    process.exit(1);
  }
};
