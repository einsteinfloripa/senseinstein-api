import { CursosRepository } from "@repositories/CursosRepository";

export class CursosServices {
  static async pegarTodosCursos() {
    return await CursosRepository.findCursosPorFaculdade("Instituicoes");
  }
}
