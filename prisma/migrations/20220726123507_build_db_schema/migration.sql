-- CreateEnum
CREATE TYPE "Funcao" AS ENUM ('Organizador', 'Docente');

-- CreateEnum
CREATE TYPE "Departamento" AS ENUM ('Hogwarts', 'Vale', 'Ministerio', 'Times', 'Embaixada', 'Portugues', 'Literatura', 'Ingles', 'Espanhol', 'Matematica', 'Biologia', 'Historia', 'Geografia', 'Fisica', 'Quimica', 'Filosofia', 'Redacao');

-- CreateEnum
CREATE TYPE "EstadoCivil" AS ENUM ('Solteiro', 'Casado', 'Divorciado', 'Separado', 'Viuvo');

-- CreateTable
CREATE TABLE "voluntarios" (
    "id" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "enderecoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "estadoCivil" "EstadoCivil" NOT NULL,
    "funcao" "Funcao" NOT NULL,
    "departamento" "Departamento" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "voluntarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "cidade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" SERIAL NOT NULL,
    "instituicaoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instituicoes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "instituicoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entradas" (
    "id" SERIAL NOT NULL,
    "voluntarioId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entradas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saidas" (
    "id" SERIAL NOT NULL,
    "voluntarioId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saidas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "voluntarios_cpf_key" ON "voluntarios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "voluntarios_rg_key" ON "voluntarios"("rg");

-- AddForeignKey
ALTER TABLE "voluntarios" ADD CONSTRAINT "voluntarios_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voluntarios" ADD CONSTRAINT "voluntarios_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_instituicaoId_fkey" FOREIGN KEY ("instituicaoId") REFERENCES "instituicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradas" ADD CONSTRAINT "entradas_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "voluntarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saidas" ADD CONSTRAINT "saidas_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "voluntarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
