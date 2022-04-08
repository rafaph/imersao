import { Sequelize } from "sequelize-typescript";
import { TransactionModel } from "@app/infrastructure/db/model/transaction";

export const DatabaseToken = "SEQUELIZE";

export async function makeSequelize(databaseUrl = process.env.DATABASE_URL as string): Promise<Sequelize> {
  const sequelize = new Sequelize(databaseUrl, {
    logging: false,
  });
  sequelize.addModels([TransactionModel]);
  await sequelize.sync();
  return sequelize;
}

export const DatabaseProvider = {
  provide: DatabaseToken,
  useFactory: makeSequelize,
};
