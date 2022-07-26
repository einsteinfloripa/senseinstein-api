import { Request, Response } from "express";

export class CursosController {
  static async listarCursosPorFaculdade(req: Request, res: Response) {
    res.send("Lista de Todos os Cursos");
  }
}
