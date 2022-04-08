import { TransactionModel } from "@app/infrastructure/db/model/transaction";
import { SequelizeTransactionRepository } from "@app/infrastructure/repository/sequelize-transaction.repository";
import { makeTransaction } from "@test/helpers/factories";
import { runWithDatabase } from "@test/helpers/run-with-database";

const makeSut = (): SequelizeTransactionRepository => new SequelizeTransactionRepository(TransactionModel);

describe("SequelizeTransactionRepository", () => {
  describe(".create", () => {
    it("should create a transaction", async () => {
      await runWithDatabase(async () => {
        // given
        const repository = makeSut();
        const transaction = makeTransaction();

        // when
        await repository.create(transaction);

        // then
        const result = await TransactionModel.findByPk(transaction.id.toString());
        expect(result).toBeTruthy();
      });
    });
  });

  describe(".find", () => {
    it("should find a transaction by id", async () => {
      await runWithDatabase(async () => {
        // given
        const transaction = makeTransaction();
        await TransactionModel.create({ ...transaction.toPlain() });

        // given
        const repository = makeSut();

        // when
        const result = await repository.find(transaction.id);

        // then
        expect(result).toBeTruthy();
        expect(result?.id).toStrictEqual(transaction.id);
      });
    });

    it("should not find a transaction by id", async () => {
      await runWithDatabase(async () => {
        // given
        const transaction = makeTransaction();

        // given
        const repository = makeSut();

        // when
        const result = await repository.find(transaction.id);

        // then
        expect(result).toBeFalsy();
      });
    });
  });

  describe(".list", () => {
    it("should list all transactions", async () => {
      await runWithDatabase(async () => {
        // given
        const transaction = makeTransaction();
        await TransactionModel.create({ ...transaction.toPlain() });

        // given
        const repository = makeSut();

        // when
        const result = await repository.list();

        // then
        expect(result).toHaveLength(1);
        expect(result[0]).toStrictEqual(transaction);
      });
    });
  });
});
