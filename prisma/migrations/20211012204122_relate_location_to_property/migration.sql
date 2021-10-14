/*
  Warnings:

  - You are about to drop the column `city` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "zip",
ADD COLUMN     "locationId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Property" ADD FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
