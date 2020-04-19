import dotenv from "dotenv";
dotenv.config();
import express from "express";
import middlewares from "./middlewares";
import routes from "./api";
import { createConnection } from "typeorm";

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(middlewares);
app.use("/api/v1/", routes);
app.listen(port, async () => {
  try {
    await createConnection();
    console.log(`Server listenning on http://${host}:${port}`);
  } catch (err) {
    console.log(err);
  }
});
