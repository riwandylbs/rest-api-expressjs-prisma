import express, { Application } from "express";
import cors from "cors"
import router from "./routes";
import { port } from "./config";

const app: Application = express();

app.use(express.json())
app.use(router)
app.use(cors())

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})