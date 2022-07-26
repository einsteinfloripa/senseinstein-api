import { VoluntarioController } from "@controllers/VoluntarioController";
import { voluntarioMiddleware } from "@middlewares/voluntarioMiddleware";
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
      voluntarioMiddleware,
      VoluntarioController.adicionarVonlutario,
    );
  }
}
