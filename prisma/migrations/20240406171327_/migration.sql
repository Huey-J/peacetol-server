-- AlterTable
ALTER TABLE `Mission` ADD COLUMN `isTransportation` BOOLEAN NULL,
    ADD COLUMN `step` INTEGER NULL;

-- AlterTable
ALTER TABLE `MissionTemplate` ADD COLUMN `answerType` ENUM('Hungry', 'Thirsty', 'WaterSide', 'Theater', 'Karaoke') NULL;

-- AddForeignKey
ALTER TABLE `Adventure` ADD CONSTRAINT `Adventure_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
