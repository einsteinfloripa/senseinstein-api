import { VoluntarioController } from "@controllers/VoluntarioController";
import { Router } from "express";

export class VoluntarioRouter {
  public voluntarioRouter: Router;
  constructor() {
    this.voluntarioRouter = Router();

    this.buildRoutes();
  }

  private buildRoutes() {
    const { voluntarioRouter } = this;

    voluntarioRouter.post(
      "/voluntario",
      VoluntarioController.adicionarVonlutario,
    );
  }
}
