import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { addFit, updateFit, getFits, deleteFit } from "./src/Functions.js"

const app = express()
app.use(express.json())
app.use(cors())

//this is four endpoints
app.get("/", (req, res) => res.send("🧑‍💻"))
app.get("/outfit", getFits)
app.post("/blog", addFit)
app.patch("/blog/:blogId", updateFit)
app.delete("/blog/:blogId", deleteFit)

export const api = functions.https.onRequest(app)