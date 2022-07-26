import { PrismaQueryFactory } from "@factories/PrismaQueryFactory";
import { prisma, Prisma } from "@prisma/client";

export class FindRepository {
  static async findAll<Table>(table: Prisma.ModelName, data: Table) {
    const { query } = new PrismaQueryFactory(table, "findMany");
    return await query(data);
  }
}
