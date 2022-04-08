import { Inject, Injectable } from "@nestjs/common";
import { Transaction } from "@app/domain/model/transaction";
import { UUID } from "@app/domain/model/uuid";
import { TransactionRepository } from "@app/domain/repository/transaction.repository";
import { TransactionToken, TransactionType, TransactionModel } from "@app/infrastructure/db/model/transaction";

@Injectable()
export class SequelizeTransactionRepository implements TransactionRepository {
  public constructor(
    @Inject(TransactionToken)
    private readonly model: TransactionType,
  ) {}

  public async create(transaction: Transaction): Promise<void> {
    await this.model.create<TransactionModel>({
      ...transaction.toPlain(),
    });
  }

  public async find(id: UUID): Promise<Transaction | null> {
    const result = await this.model.findByPk<TransactionModel>(id.toString());

    if (result === null) {
      return null;
    }

    return Transaction.fromPlain(result);
  }

  public async list(): Promise<Transaction[]> {
    const results = await this.model.findAll<TransactionModel>();

    return results.map((result) => Transaction.fromPlain(result));
  }
}
