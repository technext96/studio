-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'PUBLISHED');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'PENDING';
