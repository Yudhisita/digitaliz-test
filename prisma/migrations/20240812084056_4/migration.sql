-- DropForeignKey
ALTER TABLE `materials` DROP FOREIGN KEY `materials_course_id_fkey`;

-- AlterTable
ALTER TABLE `courses` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `materials` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `materials` ADD CONSTRAINT `materials_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
