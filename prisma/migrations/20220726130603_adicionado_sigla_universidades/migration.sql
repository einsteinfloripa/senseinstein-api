/*
  Warnings:

  - Added the required column `sigla` to the `instituicoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "instituicoes" ADD COLUMN     "sigla" TEXT NOT NULL;
