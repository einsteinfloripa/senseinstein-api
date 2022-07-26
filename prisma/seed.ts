import cursosUniversidades from "./dados/cursosUniversidades.json";
import {
  Cursos,
  Enderecos,
  Entradas,
  Instituicoes,
  PrismaClient,
  Voluntarios,
} from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const universidades: Omit<Instituicoes, "id">[] = [
    { nome: "Universidade Federal de Santa Catarina", sigla: "UFSC" },
  ];
  const cursos: Omit<Cursos, "id">[] = cursosUniversidades["UFSC"].map(
    (curso) => {
      return { instituicaoId: 1, nome: curso };
    },
  );
  const voluntarios: Omit<Voluntarios, "id" | "createdAt" | "updatedAt"> = {
    cursoId: 52,
    nome: "Gabriel Viana Boaes",
    dataNasc: new Date("2001-05-16"),
    telefone: "98999073330",
    email: "gabriel.viana@einsteinfloripa.com",
    cpf: "123456789",
    rg: "123456789",
    estadoCivil: "Solteiro",
    funcao: "Organizador",
    departamento: "Vale",
  };
  await prisma.instituicoes.createMany({ data: universidades });
  await prisma.cursos.createMany({ data: cursos });
  const voluntario = await prisma.voluntarios.create({ data: voluntarios });

  const entrada: Omit<Entradas, "id" | "data"> = {
    voluntarioId: voluntario.id,
  };

  const endereco: Omit<Enderecos, "id"> = {
    voluntarioId: voluntario.id,
    cidade: "Floripa",
    cep: "89.907-3330",
    rua: "Rua dos Bobos",
    bairro: "Centro",
    complemento: "Apto. 101",
  };

  await prisma.enderecos.create({ data: endereco });
  await prisma.entradas.create({ data: entrada });
};

main()
  .catch((e) => console.log(e.message))
  .finally(() => prisma.$disconnect());
