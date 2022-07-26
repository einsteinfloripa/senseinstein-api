import { VoluntarioSchema } from "@schemas/schemas/JoiSchemas";
import { NextFunction, Request, Response } from "express";

export const voluntarioMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = VoluntarioSchema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  next();
};
