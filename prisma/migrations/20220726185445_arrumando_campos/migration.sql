/*
  Warnings:

  - You are about to drop the column `data` on the `entradas` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `saidas` table. All the data in the column will be lost.
  - Added the required column `ano` to the `entradas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `entradas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ano` to the `saidas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes` to the `saidas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entradas" DROP COLUMN "data",
ADD COLUMN     "ano" TEXT NOT NULL,
ADD COLUMN     "mes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "saidas" DROP COLUMN "data",
ADD COLUMN     "ano" TEXT NOT NULL,
ADD COLUMN     "mes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "voluntarios" ALTER COLUMN "dataNasc" SET DATA TYPE TEXT;
