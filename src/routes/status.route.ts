import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();

statusRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK).send({ foo: "bar" });
});

export default statusRoute;
