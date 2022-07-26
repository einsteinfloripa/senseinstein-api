/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `voluntarios` table. All the data in the column will be lost.
  - Added the required column `voluntarioId` to the `enderecos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "voluntarios" DROP CONSTRAINT "voluntarios_enderecoId_fkey";

-- AlterTable
ALTER TABLE "enderecos" ADD COLUMN     "voluntarioId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "voluntarios" DROP COLUMN "enderecoId";

-- AddForeignKey
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "voluntarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
