-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('Apartment', 'House', 'Office', 'Landplot');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "isFurnished" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isNearbyBeach" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isParkingAccessible" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isPetsFriendly" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isWithAirCondition" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isWithBabyBed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWithBreakfast" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWithFireplace" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWithKitchen" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isWithLaundry" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isWithOfficeZone" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWithSmokingZone" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWithWiFi" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 2000,
ADD COLUMN     "type" "PropertyType" NOT NULL DEFAULT E'House';
