import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import moviesRouter from "./router/movies.routes";
import dotenv from "dotenv";

const app = express();
dotenv.config()
app.use(json());
app.use(moviesRouter)
app.get("/health", (req:Request, res:Response) => res.sendStatus(httpStatus.OK))

const port = +process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is up and running or port: ${port}`);
  })