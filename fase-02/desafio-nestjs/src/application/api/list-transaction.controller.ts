import { Controller, Get } from "@nestjs/common";
import { TransactionResponse } from "@app/application/api/response/transaction.response";
import { ListTransactionUsecase } from "@app/application/usecase/list-transaction.usecase";

@Controller("transactions")
export class ListTransactionController {
  public constructor(private readonly useCase: ListTransactionUsecase) {}

  @Get()
  public async handle(): Promise<TransactionResponse[]> {
    const transactions = await this.useCase.execute();

    return transactions.map((transaction) => new TransactionResponse(transaction));
  }
}
