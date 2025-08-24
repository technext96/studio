-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "jsonLd" JSONB;