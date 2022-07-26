import { Request, Response } from "express";

export class VoluntarioController {
  static async adicionarVonlutario(req: Request, res: Response) {
    res.send("Voluntario Adicionado");
  }
}
