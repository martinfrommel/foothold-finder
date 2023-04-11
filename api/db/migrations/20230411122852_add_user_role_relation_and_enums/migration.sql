-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('User', 'Moderator', 'Admin');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "Roles" "public"."UserRole" NOT NULL DEFAULT 'User';
