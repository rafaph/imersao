import { Global, Module } from "@nestjs/common";
import { TransactionRepository } from "@app/domain/repository/transaction.repository";
import { DatabaseProvider } from "@app/infrastructure/db/database-provider";
import { TransactionProvider } from "@app/infrastructure/db/model/transaction";
import { SequelizeTransactionRepository } from "@app/infrastructure/repository/sequelize-transaction.repository";

@Global()
@Module({
  providers: [
    DatabaseProvider,
    TransactionProvider,
    {
      provide: TransactionRepository,
      useClass: SequelizeTransactionRepository,
    },
  ],
  exports: [TransactionRepository],
})
export class InfrastructureModule {}
