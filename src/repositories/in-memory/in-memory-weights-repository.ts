import { Prisma, Weight } from "@prisma/client";
import { WeightsRepository } from "../weights-repository";

export class InMemoryWeightsRepository implements WeightsRepository {
  public items: Weight[] = [];

  async create(data: Prisma.WeightUncheckedCreateInput) {
    const weight = {
      id: "weight-1",
      value: data.value,
      createdAt: new Date(),
      exercise_id: data.exercise_id,
      exercise_routine_id: data.exercise_routine_id,
    };

    this.items.push(weight);

    return weight;
  }
}
