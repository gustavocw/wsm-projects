import express from "express"
import { getShips, addShip, updateShip, deleteShip } from "../controllers/ships.js";

const router = express.Router()

router.get("/", getShips)

router.post("/", addShip)

router.put("/:id", updateShip)

router.delete("/:id", deleteShip)

export default router;