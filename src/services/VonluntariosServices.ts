import { VoluntarioRepository } from "@repositories/VoluntarioRepository";
import { InserirVoluntario } from "@schemas/types/InserirVonluntarioTypes";

export class VoluntarioService {
  static async adicionarDadosVonlutario(data: InserirVoluntario) {
    await VoluntarioRepository.adicionarDadosVonlutario(data);
  }
}
