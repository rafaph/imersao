import { Injectable } from "@nestjs/common";
import { err, ok, Result } from "neverthrow";
import { ApplicationError } from "@app/application/error/application.error";
import { Transaction, TransactionProperties } from "@app/domain/model/transaction";
import { UUID } from "@app/domain/model/uuid";
import { TransactionRepository } from "@app/domain/repository/transaction.repository";

export type CreateTransactionUsecaseInput = Omit<TransactionProperties, "id">;

@Injectable()
export class CreateTransactionUsecase {
  public constructor(private readonly transactionRepository: TransactionRepository) {}

  public async execute(input: CreateTransactionUsecaseInput): Promise<Result<Transaction, ApplicationError>> {
    const transaction = Transaction.new({
      ...input,
      id: UUID.new().toString(),
    });

    if (transaction.isErr()) {
      return err(new ApplicationError(transaction.error.message));
    }

    await this.transactionRepository.create(transaction.value);

    return ok(transaction.value);
  }
}
