/*
  Warnings:

  - Added the required column `current_weight_id` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_user_id_fkey";

-- DropForeignKey
ALTER TABLE "routine_trainings" DROP CONSTRAINT "routine_trainings_training_id_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_user_id_fkey";

-- DropForeignKey
ALTER TABLE "weights" DROP CONSTRAINT "weights_exercise_id_fkey";

-- AlterTable
ALTER TABLE "exercises" ADD COLUMN     "current_weight_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_trainings" ADD CONSTRAINT "routine_trainings_training_id_fkey" FOREIGN KEY ("training_id") REFERENCES "trainings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weights" ADD CONSTRAINT "weights_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
