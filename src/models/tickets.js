import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    total_quota: {
      type: Number,
      required: true,
    },
    count_quota: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Tickets", ticketSchema);
