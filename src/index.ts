import express, { Application } from "express";
import cors from "cors";
import router from "./routes";
import { port } from "./config";
import { authentications } from "./middleware/auth";

const app: Application = express();
app.use(express.json())
app.use(authentications)

// Setup morgan logging
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');
const logDirectory = path.join(__dirname, 'logs');
const logStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory,
});

app.use(morgan('combined', { stream: logStream }));
app.use("/api", router)
app.use(cors())

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})