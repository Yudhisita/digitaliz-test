-- AlterTable
ALTER TABLE `courses` MODIFY `duration` INTEGER NULL DEFAULT 0,
    ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `materials` ALTER COLUMN `updated_at` DROP DEFAULT;
