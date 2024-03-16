import modelUsers from "../models/users.js";
import modelTickets from "../models/tickets.js";
import modelBooking from "../models/booking.js";

export const booking = async (req, res) => {
  try {
    const { user_id, ticket_id } = req.body;

    const findUser = await modelUsers.findById(user_id);
    const findTicket = await modelTickets.findById(ticket_id);

    if (!findUser || !findTicket) {
      return res.status(404).send({
        code: 404,
        message: "User or Ticket not found!",
      });
    }

    // Check if quota is available
    if (findTicket.count_quota <= 0) {
      return res.status(400).json({ message: "Ticket quota exceeded" });
    }

    const booking = new modelBooking({
      user_id: findUser._id,
      ticket_id: findTicket._id,
    });

    // Decrement ticket quota
    findTicket.count_quota--;

    // Save booking and update ticket quota
    await Promise.all([booking.save(), findTicket.save()]);

    res.status(201).send({
      code: 201,
      message: "Booking berhasil",
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: error?.message || "Internal server error",
    });
  }
};

export const list = async (req, res) => {
  try {
    const data = await modelBooking.aggregate([
      {
        $lookup: {
          from: "users",
          foreignField: "_id",
          localField: "user_id",
          as: "detail_user",
        },
      },
      {
        $unwind: "$detail_user",
      },
      {
        $lookup: {
          from: "tickets",
          foreignField: "_id",
          localField: "ticket_id",
          as: "detail_ticket",
        },
      },
      {
        $unwind: "$detail_ticket",
      },
    ]);

    res.status(200).send({
      code: 200,
      message: "All data",
      data,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: error?.message || "Internal server error",
    });
  }
};
