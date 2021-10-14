-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip" TEXT NOT NULL DEFAULT E'',

    PRIMARY KEY ("id")
);
