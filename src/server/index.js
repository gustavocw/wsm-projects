import express from 'express'
import alunosRoutes from "./routes/alunos.js"
import professoresRoutes from "./routes/professores.js"
import cors from 'cors'

const app = express ()

app.use(express.json())
app.use(cors())
app.use("/alunos", alunosRoutes)
app.use("/professores", professoresRoutes)

app.listen(8080)

