import "reflect-metadata"

import express from "express"
import cors from "cors"
import { router } from "./routes/routes"

const app = express()
app.use(cors())
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log("===== | SERVER IS RUNNING | =====")
})

// EinsteinE13@@tes