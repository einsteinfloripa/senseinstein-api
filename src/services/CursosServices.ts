import { Prisma } from "@prisma/client";
import { FindRepository } from "@repositories/FindRepository";

export class CursosServices {
  static async pegarTodosCursos() {
    return await FindRepository.findAll<Prisma.InstituicoesFindManyArgs>(
      "Instituicoes",
      {
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
      },
    );
  }
}
