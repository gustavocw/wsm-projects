import express from "express"
import { getProfessores, addProfessores, updateProfessores, deleteProfessores } from "../controllers/professores.js";

const router = express.Router()

router.get("/", getProfessores)

router.post("/", addProfessores)

router.put("/:id", updateProfessores)

router.delete("/:id", deleteProfessores)

export default router;