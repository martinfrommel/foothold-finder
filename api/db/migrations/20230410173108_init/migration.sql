-- CreateEnum
CREATE TYPE "public"."ClimbingStyle" AS ENUM ('Sport', 'Trad', 'Bouldering', 'Aid', 'Ice', 'Mixed');

-- CreateEnum
CREATE TYPE "public"."CragType" AS ENUM ('Sport', 'Trad', 'Bouldering', 'Mixed');

-- CreateEnum
CREATE TYPE "public"."GradeFont" AS ENUM ('Font_3', 'Font_4A', 'Font_4B', 'Font_4C', 'Font_5A', 'Font_5B', 'Font_5C', 'Font_6A', 'Font_6Aplus', 'Font_6B', 'Font_6Bplus', 'Font_6C', 'Font_6Cplus', 'Font_7A', 'Font_7Aplus', 'Font_7B', 'Font_7Bplus', 'Font_7C', 'Font_7Cplus', 'Font_8A', 'Font_8Aplus', 'Font_8B', 'Font_8Bplus', 'Font_8C', 'Font_8Cplus', 'Font_9A', 'Font_9Aplus', 'Font_9B', 'Font_9Bplus', 'Font_9C', 'Font_9Cplus');

-- CreateEnum
CREATE TYPE "public"."GradeFrenchSport" AS ENUM ('FS_1', 'FS_2a', 'FS_2b', 'FS_2c', 'FS_3a', 'FS_3b', 'FS_3c', 'FS_4a', 'FS_4b', 'FS_4c', 'FS_5a', 'FS_5b', 'FS_5c', 'FS_6a', 'FS_6a_plus', 'FS_6b', 'FS_6b_plus', 'FS_6c', 'FS_6c_plus', 'FS_7a', 'FS_7a_plus', 'FS_7b', 'FS_7b_plus', 'FS_7c', 'FS_7c_plus', 'FS_8a', 'FS_8a_plus', 'FS_8b', 'FS_8b_plus', 'FS_8c', 'FS_8c_plus', 'FS_9a', 'FS_9a_plus', 'FS_9b', 'FS_9b_plus', 'FS_9c');

-- CreateEnum
CREATE TYPE "public"."GradeHueco" AS ENUM ('Hueco_VB', 'Hueco_V0', 'Hueco_V1', 'Hueco_V2', 'Hueco_V3', 'Hueco_V4', 'Hueco_V5', 'Hueco_V6', 'Hueco_V7', 'Hueco_V8', 'Hueco_V9', 'Hueco_V10', 'Hueco_V11', 'Hueco_V12', 'Hueco_V13', 'Hueco_V14', 'Hueco_V15', 'Hueco_V16', 'Hueco_V17');

-- CreateEnum
CREATE TYPE "public"."GradeYDS" AS ENUM ('YDS_50', 'YDS_51', 'YDS_52', 'YDS_53', 'YDS_54', 'YDS_55', 'YDS_56', 'YDS_57', 'YDS_58', 'YDS_59', 'YDS_510', 'YDS_511', 'YDS_512', 'YDS_513', 'YDS_514', 'YDS_515', 'YDS_516', 'YDS_517', 'YDS_518', 'YDS_519', 'YDS_520');

-- CreateEnum
CREATE TYPE "public"."GymType" AS ENUM ('Bouldering', 'RopedClimbing', 'Combined');

-- CreateEnum
CREATE TYPE "public"."ProductCondition" AS ENUM ('New', 'LikeNew', 'Good', 'Fair', 'Poor');

-- CreateEnum
CREATE TYPE "public"."Rating" AS ENUM ('OneStar', 'TwoStars', 'ThreeStars', 'FourStars', 'FiveStars');

-- CreateEnum
CREATE TYPE "public"."SustainabilityCondition" AS ENUM ('Excellent', 'Good', 'Fair', 'Poor', 'VeryPoor');

-- CreateTable
CREATE TABLE "public"."Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClimbedRoute" (
    "id" SERIAL NOT NULL,
    "diaryId" INTEGER NOT NULL,
    "routeId" INTEGER NOT NULL,

    CONSTRAINT "ClimbedRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Community" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,
    "rating" "public"."Rating",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CommunityOwner" (
    "id" SERIAL NOT NULL,
    "communityId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CommunityOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Country" (
    "code" VARCHAR(2) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "public"."Crag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "areaId" INTEGER NOT NULL,
    "cragType" "public"."CragType" NOT NULL,

    CONSTRAINT "Crag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Diary" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Diary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Gym" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,
    "rating" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "Gym_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Listing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "condition" "public"."ProductCondition" NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT,
    "condition" "public"."ProductCondition" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Route" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "style" "public"."ClimbingStyle" NOT NULL,
    "gradeYDS" "public"."GradeYDS",
    "gradeFont" "public"."GradeFont",
    "gradeHueco" "public"."GradeHueco",
    "gradeFrenchSport" "public"."GradeFrenchSport",
    "sustainabilityRating" "public"."SustainabilityCondition",
    "description" TEXT,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cragId" INTEGER NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClimbedRoute_diaryId_routeId_key" ON "public"."ClimbedRoute"("diaryId", "routeId");

-- CreateIndex
CREATE UNIQUE INDEX "CommunityOwner_communityId_userId_key" ON "public"."CommunityOwner"("communityId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Area" ADD CONSTRAINT "Area_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "public"."Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClimbedRoute" ADD CONSTRAINT "ClimbedRoute_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "public"."Diary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClimbedRoute" ADD CONSTRAINT "ClimbedRoute_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "public"."Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Community" ADD CONSTRAINT "Community_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommunityOwner" ADD CONSTRAINT "CommunityOwner_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommunityOwner" ADD CONSTRAINT "CommunityOwner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Crag" ADD CONSTRAINT "Crag_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Diary" ADD CONSTRAINT "Diary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Gym" ADD CONSTRAINT "Gym_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "public"."Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Gym" ADD CONSTRAINT "Gym_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Listing" ADD CONSTRAINT "Listing_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Route" ADD CONSTRAINT "Route_cragId_fkey" FOREIGN KEY ("cragId") REFERENCES "public"."Crag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
