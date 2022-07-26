import express, { Application } from "express";
import cors from "cors";

import { VoluntarioRouter } from "@routers/VoluntarioRouter";
import { CursosRouter } from "@routers/CursosRouter";

export class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.middleware();
    this.buildRouter();
  }

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private buildRouter() {
    const { app } = this;

    app.use(new VoluntarioRouter().voluntarioRouter);
    app.use(new CursosRouter().cursosRouter);
  }
}
