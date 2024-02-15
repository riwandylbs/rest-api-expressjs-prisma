-- CreateTable
CREATE TABLE "PostStats" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "totalRead" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostStats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostStats" ADD CONSTRAINT "PostStats_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
