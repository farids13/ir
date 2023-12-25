/*
  Warnings:

  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "DeletedAt" TIMESTAMP(3),
ADD COLUMN     "DeletedBy" TEXT,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3),
ADD COLUMN     "UpdatedBy" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "name" VARCHAR(200),
ADD COLUMN     "phoneNumber" VARCHAR(20),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100);
