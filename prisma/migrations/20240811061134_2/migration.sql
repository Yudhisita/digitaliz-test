/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `courses` DROP COLUMN `thumbnail`,
    ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `materials` ALTER COLUMN `updated_at` DROP DEFAULT;
