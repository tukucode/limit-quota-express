import mongoose from "mongoose";

try {
  // CONNECTION
  await mongoose.connect("mongodb://127.0.0.1:27017/my_tickets");
  console.log("DB connection success");
} catch (error) {
  console.error.error("DB connection failed", error);
}
