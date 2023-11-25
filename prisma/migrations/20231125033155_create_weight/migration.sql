-- CreateTable
CREATE TABLE "weights" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exercise_id" TEXT,
    "exercise_routine_id" TEXT,

    CONSTRAINT "weights_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weights" ADD CONSTRAINT "weights_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weights" ADD CONSTRAINT "weights_exercise_routine_id_fkey" FOREIGN KEY ("exercise_routine_id") REFERENCES "routine_exercises"("id") ON DELETE SET NULL ON UPDATE CASCADE;
