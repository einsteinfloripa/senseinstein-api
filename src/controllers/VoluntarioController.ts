import { InserirVoluntario } from "@schemas/types/InserirVonluntarioTypes";
import { VoluntarioService } from "@services/VonluntariosServices";
import { Request, Response } from "express";

export class VoluntarioController {
  static async adicionarVonlutario(
    req: Request<any, any, InserirVoluntario>,
    res: Response,
  ) {
    try {
      await VoluntarioService.adicionarDadosVonlutario(req.body);
      res.send("Voluntario Adicionado");
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
