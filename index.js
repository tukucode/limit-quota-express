import express from "express";
import cors from "cors";
import seed from "./src/config/seed.js";
import userRoute from "./src/routes/users.js";
import ticketRoute from "./src/routes/tickets.js";
import bookingRoute from "./src/routes/booking.js";

// POOL CONNECTION
import "./src/config/connection.js";

// DEFINE APP
const app = express();

// DEFINE CORS
app.use(cors());

// DEFINE BODY PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", [userRoute, ticketRoute, bookingRoute]);

await seed();

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
