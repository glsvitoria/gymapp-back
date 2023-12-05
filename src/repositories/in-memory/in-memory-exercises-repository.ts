import { Exercise, Prisma, Weight } from "@prisma/client";
import { ExercisesRepository } from "../exercises-repository";

export class InMemoryExercisesRepository implements ExercisesRepository {
  public items: Exercise[] = [];

  async create(data: Prisma.ExerciseUncheckedCreateInput) {
    const exercise = {
      id: "exercise-1",
      name: data.name,
      series: data.series,
      repetitions: data.repetitions,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: data.user_id,
      training_id: data.training_id,
      current_weight_id: data.current_weight_id,
    };

    this.items.push(exercise);

    return exercise;
  }
}
