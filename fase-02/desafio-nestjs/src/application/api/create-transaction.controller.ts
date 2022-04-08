import { Body, Controller, HttpCode, HttpStatus, Post, UnprocessableEntityException } from "@nestjs/common";
import { CreateTransactionRequest } from "@app/application/api/request/create-transaction.request";
import { TransactionResponse } from "@app/application/api/response/transaction.response";
import { CreateTransactionUsecase } from "@app/application/usecase/create-transaction.usecase";

@Controller("transactions")
export class CreateTransactionController {
  public constructor(private readonly useCase: CreateTransactionUsecase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async handle(@Body() body: CreateTransactionRequest): Promise<TransactionResponse> {
    const result = await this.useCase.execute(body);

    if (result.isErr()) {
      throw new UnprocessableEntityException(result.error.toJSON());
    }

    return new TransactionResponse(result.value);
  }
}
