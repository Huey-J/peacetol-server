/*
  Warnings:

  - You are about to drop the column `imagePath` on the `Adventure` table. All the data in the column will be lost.
  - Added the required column `quote` to the `Mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quote` to the `MissionTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Adventure` DROP FOREIGN KEY `Adventure_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Mission` DROP FOREIGN KEY `Mission_adventureId_fkey`;

-- AlterTable
ALTER TABLE `Adventure` DROP COLUMN `imagePath`,
    ADD COLUMN `isFinalTransportation` BOOLEAN NULL,
    ADD COLUMN `isFirstTransportation` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Mission` ADD COLUMN `imagePath` VARCHAR(191) NULL,
    ADD COLUMN `quote` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `MissionTemplate` ADD COLUMN `imagePath` VARCHAR(191) NULL,
    ADD COLUMN `isTransportation` BOOLEAN NULL,
    ADD COLUMN `quote` VARCHAR(191) NOT NULL,
    MODIFY `startNumber` INTEGER NULL,
    MODIFY `endNumber` INTEGER NULL;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `star` INTEGER NOT NULL,
    `adventureId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
