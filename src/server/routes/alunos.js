import express from "express"
import { getAlunos, addAluno, updateAluno, deleteAluno } from "../controllers/alunos.js";

const router = express.Router()

router.get("/", getAlunos)

router.post("/", addAluno)

router.put("/:id", updateAluno)

router.delete("/:id", deleteAluno)

export default router;