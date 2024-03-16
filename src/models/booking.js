import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    ticket_id: {
      type: Schema.Types.ObjectId,
      ref: "Tickets",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Booking", bookingSchema);
