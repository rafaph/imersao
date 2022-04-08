import { Injectable } from "@nestjs/common";
import { err, ok, Result } from "neverthrow";
import { ApplicationError } from "@app/application/error/application.error";
import { Transaction } from "@app/domain/model/transaction";
import { UUID } from "@app/domain/model/uuid";
import { TransactionRepository } from "@app/domain/repository/transaction.repository";

@Injectable()
export class GetTransactionUsecase {
  public constructor(private readonly transactionRepository: TransactionRepository) {}

  private static makeError(): Result<Transaction, ApplicationError> {
    return err(new ApplicationError("Transaction not found"));
  }

  public async execute(id: string): Promise<Result<Transaction, ApplicationError>> {
    const uuid = UUID.fromString(id);

    if (uuid.isErr()) {
      return GetTransactionUsecase.makeError();
    }

    const transaction = await this.transactionRepository.find(uuid.value);

    if (transaction === null) {
      return GetTransactionUsecase.makeError();
    }

    return ok(transaction);
  }
}
