import { Injectable } from "@nestjs/common";
import { Transaction } from "@app/domain/model/transaction";
import { TransactionRepository } from "@app/domain/repository/transaction.repository";

@Injectable()
export class ListTransactionUsecase {
  public constructor(private readonly transactionRepository: TransactionRepository) {}

  public execute(): Promise<Transaction[]> {
    return this.transactionRepository.list();
  }
}
