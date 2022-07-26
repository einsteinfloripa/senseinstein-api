import { CursosController } from "@controllers/CursosController";
import { Router } from "express";

export class CursosRouter {
  public cursosRouter: Router;
  constructor() {
    this.cursosRouter = Router();

    this.buildRoutes();
  }

  private buildRoutes() {
    const { cursosRouter } = this;

    cursosRouter.get("/curso", CursosController.listarCursosPorFaculdade);
  }
}
