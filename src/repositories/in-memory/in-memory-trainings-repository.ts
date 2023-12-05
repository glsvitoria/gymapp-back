import { Prisma, Training } from "@prisma/client";
import { TrainingsRepository } from "../trainings-repository";

export class InMemoryTrainingsRepository implements TrainingsRepository {
  public items: Training[] = [];

  async create(data: Prisma.TrainingUncheckedCreateInput) {
    const training = {
      id: "training-1",
      name: data.name,
      number_of_times: data.number_of_times,
      active: data.active,
      user_id: data.user_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(training);

    return training;
  }
}
