import express from 'express'
import shipsRoutes from "./routes/ships.js"
import cors from 'cors'

const app = express ()

app.use(express.json())
app.use(cors())
app.use("/naviosdb", shipsRoutes)

app.listen(8080)

