import { Departamento, EstadoCivil, Funcao } from "@prisma/client";

export type InserirVoluntario = {
  cursoId: number;
  nome: string;
  dataNasc: string;
  telefone: string;
  email: string;
  cpf: string;
  rg: string;
  estadoCivil: EstadoCivil;
  funcao: Funcao;
  departamento: Departamento;
  entrada: {
    mes: string;
    ano: string;
  };
  endereco: {
    cidade: string;
    cep: string;
    rua: string;
    bairro: string;
    complemento?: string;
  };
};
