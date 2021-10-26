/*
  Warnings:

  - Added the required column `lat` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "lat" TEXT NOT NULL,
ADD COLUMN     "long" TEXT NOT NULL,
ALTER COLUMN "baths" SET DEFAULT 1;
