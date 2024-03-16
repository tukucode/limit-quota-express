import modelTickets from "../models/tickets.js";

export default async function (req, res) {
  const data = await modelTickets.find();

  res.status(200).send({
    code: 200,
    message: "All data",
    data,
  });
}
