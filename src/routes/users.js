import express from "express";
import ListUser from "../controllers/users.js";

const ROUTER = express.Router();

ROUTER.get("/users", ListUser);

export default ROUTER;
