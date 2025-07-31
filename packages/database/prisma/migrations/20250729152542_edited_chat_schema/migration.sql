/*
  Warnings:

  - The primary key for the `Chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Chats` table. All the data in the column will be lost.
  - Added the required column `senderId` to the `Chats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_receiverId_fkey";

-- AlterTable
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_pkey",
DROP COLUMN "userId",
ADD COLUMN     "senderId" INTEGER NOT NULL,
ADD CONSTRAINT "Chats_pkey" PRIMARY KEY ("senderId", "receiverId");

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_receiverId_fkey" FOREIGN KEY ("senderId", "receiverId") REFERENCES "Chats"("senderId", "receiverId") ON DELETE RESTRICT ON UPDATE CASCADE;
