import prisma from "@db/database";
import { InserirVoluntario } from "@schemas/types/InserirVonluntarioTypes";

export class VoluntarioRepository {
  static async adicionarDadosVonlutario(voluntario: InserirVoluntario) {
    return await prisma.voluntarios.create({
      data: {
        cursoId: voluntario.cursoId,
        nome: voluntario.nome,
        dataNasc: voluntario.dataNasc,
        telefone: voluntario.telefone,
        email: voluntario.email,
        cpf: voluntario.cpf,
        rg: voluntario.rg,
        estadoCivil: voluntario.estadoCivil,
        funcao: voluntario.funcao,
        departamento: voluntario.departamento,
        Entradas: {
          create: {
            ano: voluntario.entrada.ano,
            mes: voluntario.entrada.mes,
          },
        },
        Enderecos: {
          create: {
            cidade: voluntario.endereco.cidade,
            cep: voluntario.endereco.cep,
            rua: voluntario.endereco.rua,
            bairro: voluntario.endereco.bairro,
            complemento: voluntario.endereco.complemento || "",
          },
        },
      },
    });
  }
}
