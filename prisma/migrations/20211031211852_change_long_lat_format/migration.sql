/*
  Warnings:

  - Changed the type of `lat` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `long` on the `Property` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "lat",
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
DROP COLUMN "long",
ADD COLUMN     "long" DOUBLE PRECISION NOT NULL;
