import modelUsers from "../models/users.js";
import modelTickets from "../models/tickets.js";
import modelBooking from "../models/booking.js";

export default async function () {
  const findDataUser = await modelUsers.find();

  if (!findDataUser.length) {
    const dummyUser = [
      {
        name: "Tomi",
        email: "exmaple@gmail.com",
      },
      {
        name: "Mandala",
        email: "exmaple@yahoo.com",
      },
      {
        name: "Putra",
        email: "putra@gmail.com",
      },
      {
        name: "putri",
        email: "putra@gmail.com",
      },
    ];

    await modelUsers.insertMany(dummyUser);
  }

  const findDataTicket = await modelTickets.find();

  if (!findDataTicket.length) {
    const dummyTicket = [
      {
        name: "Stand Up Comedy",
        total_quota: 3,
        count_quota: 3,
      },
      {
        name: "Promo film - Cinta Suster Ngesod",
        total_quota: 5,
        count_quota: 5,
      },
    ];
    await modelTickets.insertMany(dummyTicket);
  }

  // const findBooking = await modelBooking.find();

  // if (!findBooking.length) {
  //   const findOneUser = await modelUsers.findOne({
  //     name: { $regex: "tomi", $options: "i" },
  //   });

  //   const findOneTicket = await modelTickets.findOne({
  //     name: { $regex: "Stand", $options: "i" },
  //   });

  //   await modelBooking.insertMany({
  //     user_id: findOneUser._id,
  //     ticket_id: findOneTicket._id,
  //   });
  // }
}
