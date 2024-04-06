-- DropIndex
DROP INDEX `Adventure_userId_fkey` ON `Adventure`;

-- DropIndex
DROP INDEX `Mission_adventureId_fkey` ON `Mission`;

-- AlterTable
ALTER TABLE `Review` MODIFY `star` INTEGER NULL;
