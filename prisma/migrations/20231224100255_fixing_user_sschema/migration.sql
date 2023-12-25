/*
  Warnings:

  - You are about to drop the column `DeletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `DeletedBy` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedBy` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "DeletedAt",
DROP COLUMN "DeletedBy",
DROP COLUMN "UpdatedAt",
DROP COLUMN "UpdatedBy",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" TEXT;
