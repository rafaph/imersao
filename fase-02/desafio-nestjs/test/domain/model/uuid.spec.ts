import faker from "@faker-js/faker";
import { UUID } from "@app/domain/model/uuid";

describe("UUID", () => {
  it("should create from string", () => {
    const result = UUID.fromString(faker.datatype.uuid());

    expect(result.isErr()).toBeFalsy();
    expect(result._unsafeUnwrap()).toBeInstanceOf(UUID);
  });

  it("should not create from string", () => {
    const result = UUID.fromString(faker.name.findName());

    expect(result.isErr()).toBeTruthy();
    expect(result._unsafeUnwrapErr()).toBeInstanceOf(Error);
  });
});
