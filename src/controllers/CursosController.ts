import { CursosServices } from "@services/CursosServices";
import { Request, Response } from "express";

export class CursosController {
  static async listarCursosPorFaculdade(req: Request, res: Response) {
    const cursos = await CursosServices.pegarTodosCursos();
    res.send(cursos);
  }
}
