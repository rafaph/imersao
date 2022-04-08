import { Module } from "@nestjs/common";
import { CreateTransactionController } from "@app/application/api/create-transaction.controller";
import { GetTransactionController } from "@app/application/api/get-transaction.controller";
import { ListTransactionController } from "@app/application/api/list-transaction.controller";
import { CreateTransactionUsecase } from "@app/application/usecase/create-transaction.usecase";
import { GetTransactionUsecase } from "@app/application/usecase/get-transaction.usecase";
import { ListTransactionUsecase } from "@app/application/usecase/list-transaction.usecase";

@Module({
  providers: [CreateTransactionUsecase, GetTransactionUsecase, ListTransactionUsecase],
  controllers: [CreateTransactionController, GetTransactionController, ListTransactionController],
})
export class ApplicationModule {}
