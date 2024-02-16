-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "authorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostStats" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "totalRead" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userdevice" (
    "id" SERIAL NOT NULL,
    "devicetype" VARCHAR NOT NULL,
    "newAddedColumn" VARCHAR,
    "newNewAddedColumn" VARCHAR,
    "newNewTwoAddedColumn" VARCHAR,

    CONSTRAINT "userdevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newtableexisting" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR
);

-- CreateTable
CREATE TABLE "newtableexistingnew" (
    "id" SERIAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostStats" ADD CONSTRAINT "PostStats_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

