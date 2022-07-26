import { PrismaQueryFactory } from "@factories/PrismaQueryFactory";
import { prisma, Prisma } from "@prisma/client";

export class CursosRepository {
  static async findCursosPorFaculdade(table: Prisma.ModelName) {
    const { query } = new PrismaQueryFactory(table, "findMany");
    return await query({
      select: {
        id: true,
        nome: true,
        sigla: true,
        Cursos: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
    });
  }
}
