import faker from "@faker-js/faker";
import { Transaction, TransactionProperties } from "@app/domain/model/transaction";
import { TransactionType } from "@app/domain/model/transaction-type";
import { UUID } from "@app/domain/model/uuid";

export const makeTransaction = (data: Partial<TransactionProperties> = {}): Transaction => {
  const properties: TransactionProperties = {
    id: UUID.new().toString(),
    type: faker.random.arrayElement(TransactionType),
    amount: faker.commerce.price(),
    ...data,
  };

  const result = Transaction.new(properties);

  if (result.isErr()) {
    throw new Error("Invalid transaction");
  }

  return result.value;
};

export const makeTransactionProperties = (data: Partial<TransactionProperties> = {}): TransactionProperties => ({
  id: UUID.new().toString(),
  type: faker.random.arrayElement(TransactionType),
  amount: faker.commerce.price(),
  ...data,
});
