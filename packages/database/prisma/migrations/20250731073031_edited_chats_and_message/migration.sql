/*
  Warnings:

  - The primary key for the `Chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[senderId,receiverId]` on the table `Chats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chatId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_receiverId_fkey";

-- AlterTable
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Chats_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "chatId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Chats_senderId_receiverId_key" ON "Chats"("senderId", "receiverId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
