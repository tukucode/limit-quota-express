import express from "express";
import ListTicket from "../controllers/tickets.js";

const ROUTER = express.Router();

ROUTER.get("/tickets", ListTicket);

export default ROUTER;
