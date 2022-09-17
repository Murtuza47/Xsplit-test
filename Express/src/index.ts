import express, { json, urlencoded, Application } from "express";
import { PORT } from './config'
import './config/db/db.config'
import todoItemRouter from './routes'
import cors from "cors";

export const app: Application = express()

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors())

app.use("/api", todoItemRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
})