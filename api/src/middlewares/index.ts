import { Router } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

const middleware = Router();

middleware.use(bodyParser.json({ limit: "5mb" }), compression(), helmet());

if (process.env.NODE_ENV === "development") {
  middleware.use(morgan("dev"), cors({ origin: "http://localhost:8000" }));
}

export default middleware;
