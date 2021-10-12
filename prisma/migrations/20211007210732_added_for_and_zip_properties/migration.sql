-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('RENT', 'BUY');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "for" "ServiceType" NOT NULL DEFAULT E'RENT',
ADD COLUMN     "zip" TEXT NOT NULL DEFAULT E'';
