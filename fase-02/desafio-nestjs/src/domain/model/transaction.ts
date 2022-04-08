import { Decimal } from "decimal.js";
import { err, ok, Result } from "neverthrow";
import { TransactionType } from "@app/domain/model/transaction-type";
import { UUID } from "@app/domain/model/uuid";

export interface TransactionProperties {
  readonly id: string;
  readonly type: string;
  readonly amount: string;
}

export class Transaction {
  private constructor(
    public readonly id: UUID,
    public readonly type: TransactionType,
    public readonly amount: Decimal,
  ) {}

  public static new(properties: TransactionProperties): Result<Transaction, Error> {
    const result = UUID.fromString(properties.id);

    if (result.isErr()) {
      return err(result.error);
    }

    if (!TransactionType.includes(properties.type as TransactionType)) {
      return err(new Error("Invalid type: please inform CREDIT or DEBIT"));
    }

    const amount = new Decimal(properties.amount);
    if (!amount.isFinite() || !amount.greaterThan(0)) {
      return err(new Error("Invalid amount"));
    }

    return ok(new Transaction(result.value, properties.type as TransactionType, amount));
  }

  public static fromPlain(properties: TransactionProperties): Transaction {
    const result = Transaction.new(properties);

    if (result.isErr()) {
      throw result.error;
    }

    return result.value;
  }

  public toPlain(): TransactionProperties {
    return {
      id: this.id.toString(),
      type: this.type,
      amount: this.amount.toDecimalPlaces(2).toString(),
    };
  }
}
