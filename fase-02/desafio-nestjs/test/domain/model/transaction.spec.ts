import faker from "@faker-js/faker";
import { Transaction } from "@app/domain/model/transaction";
import { makeTransactionProperties } from "@test/helpers/factories";

describe("Transaction", () => {
  describe(".new", () => {
    it("should create a transaction", () => {
      const transaction = Transaction.new(makeTransactionProperties());

      expect(transaction.isOk()).toBeTruthy();
      expect(transaction._unsafeUnwrap()).toBeInstanceOf(Transaction);
    });

    it("should not create a transaction: invalid id", () => {
      const transaction = Transaction.new(
        makeTransactionProperties({
          id: faker.name.firstName(),
        }),
      );

      expect(transaction.isErr()).toBeTruthy();
      expect(transaction._unsafeUnwrapErr()).toBeInstanceOf(Error);
    });

    it("should not create a transaction: invalid type", () => {
      const transaction = Transaction.new(
        makeTransactionProperties({
          type: faker.name.firstName(),
        }),
      );

      expect(transaction.isErr()).toBeTruthy();
      expect(transaction._unsafeUnwrapErr()).toBeInstanceOf(Error);
    });

    it("should not create a transaction: invalid amount (negative)", () => {
      const transaction = Transaction.new(
        makeTransactionProperties({
          amount: faker.commerce.price(-10, -5),
        }),
      );

      expect(transaction.isErr()).toBeTruthy();
      expect(transaction._unsafeUnwrapErr()).toBeInstanceOf(Error);
    });

    it("should not create a transaction: invalid amount (infinity)", () => {
      const transaction = Transaction.new(
        makeTransactionProperties({
          amount: "Infinity",
        }),
      );

      expect(transaction.isErr()).toBeTruthy();
      expect(transaction._unsafeUnwrapErr()).toBeInstanceOf(Error);
    });
  });

  describe(".fromPlain", () => {
    it("should create a transaction from plain", () => {
      const transaction = Transaction.fromPlain(makeTransactionProperties());

      expect(transaction).toBeTruthy();
    });

    it("should throw a exception if cannot create a transaction from plain", () => {
      const create = (): Transaction =>
        Transaction.fromPlain(
          makeTransactionProperties({
            id: faker.name.firstName(),
          }),
        );

      expect(create).toThrow(Error);
    });
  });
});
