import { beforeEach, describe, expect, it } from "vitest";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { RegisterUseCase } from "@/use-cases/users/register";
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists";

let usersRepository: InMemoryUsersRepository;
let sut: RegisterUseCase;

describe("Register Use Case", () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    sut = new RegisterUseCase(usersRepository);
  });

  it("should be able to register", async () => {
    const email = "johndoe@example.com";

    const { user } = await sut.execute({
      name: "John Doe",
      email,
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should hash user password upon registration", async () => {
    const user = await sut.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.user.password_hash,
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not be able to register with same email twice", async () => {
    const email = "johndoe@example.com";

    await sut.execute({
      name: "John Doe",
      email,
      password: "123456",
    });

    expect(
      async () =>
        await sut.execute({
          name: "John Doe",
          email,
          password: "123456",
        }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});