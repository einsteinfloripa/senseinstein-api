/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `voluntarios` will be added. If there are existing duplicate values, this will fail.
  - Made the column `data` on table `saidas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "entradas" ALTER COLUMN "data" DROP DEFAULT;

-- AlterTable
ALTER TABLE "saidas" ALTER COLUMN "data" SET NOT NULL,
ALTER COLUMN "data" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "voluntarios_email_key" ON "voluntarios"("email");
