import { randomUUID } from "crypto";
import { v4 as isUUID } from "is-uuid";
import { err, ok, Result } from "neverthrow";

export class UUID {
  private constructor(private readonly id: string) {}

  public static fromString(id: string): Result<UUID, Error> {
    if (!isUUID(id)) {
      return err(new Error("Invalid UUID"));
    }
    return ok(new UUID(id));
  }

  public static new(): UUID {
    return new UUID(randomUUID());
  }

  public toString(): string {
    return this.id;
  }
}
