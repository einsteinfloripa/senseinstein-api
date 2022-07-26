import prisma from "@db/database";
import { Prisma } from "@prisma/client";

export class PrismaQueryFactory {
  public query: any;

  constructor(table: Prisma.ModelName, query: Prisma.PrismaAction) {
    this.query = prisma[table][query];
  }
}
