/*
  Warnings:

  - Added the required column `course_id` to the `materials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courses` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `materials` ADD COLUMN `course_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `materials` ADD CONSTRAINT `materials_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
