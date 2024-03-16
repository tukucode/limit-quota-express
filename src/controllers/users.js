import modelUsers from "../models/users.js";

export default async function (req, res) {
  const data = await modelUsers.find();

  res.status(200).send({
    code: 200,
    message: "All data",
    data,
  });
}
