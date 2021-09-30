-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
