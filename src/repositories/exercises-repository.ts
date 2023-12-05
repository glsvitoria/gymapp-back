import { Exercise, Prisma } from "@prisma/client";

export interface ExercisesRepository {
  create(data: Prisma.ExerciseUncheckedCreateInput): Promise<Exercise>;
}
