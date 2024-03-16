import express from "express";
import { booking, list } from "../controllers/booking.js";

const ROUTER = express.Router();

ROUTER.post("/book/now", booking);
ROUTER.get("/book/list", list);

export default ROUTER;
