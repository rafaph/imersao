import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { TransactionResponse } from "@app/application/api/response/transaction.response";
import { GetTransactionUsecase } from "@app/application/usecase/get-transaction.usecase";

@Controller("transactions/:id")
export class GetTransactionController {
  public constructor(private readonly useCase: GetTransactionUsecase) {}

  @Get()
  public async handle(@Param("id") id: string): Promise<TransactionResponse> {
    const result = await this.useCase.execute(id);

    if (result.isErr()) {
      throw new NotFoundException(result.error.toJSON());
    }

    return new TransactionResponse(result.value);
  }
}
