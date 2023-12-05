import { beforeEach, describe, expect, it } from "vitest";
import { hash } from "bcryptjs";
import { AuthenticateUseCase } from "../../use-cases/users/authenticate";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credentials-error";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";

let usersRepository: InMemoryUsersRepository;
let sut: AuthenticateUseCase;

describe("Authenticate Use Case", () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    sut = new AuthenticateUseCase(usersRepository);
  });

  it("should be able to authenticate", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("123456", 8),
    });

    const { user } = await sut.execute({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to authenticate with wrong email", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("123456", 8),
    });

    expect(
      async () =>
        await sut.execute({
          email: "john@example.com",
          password: "123456",
        }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("12345678", 8),
    });

    expect(
      async () =>
        await sut.execute({
          email: "johndoe@example.com",
          password: "123456",
        }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
