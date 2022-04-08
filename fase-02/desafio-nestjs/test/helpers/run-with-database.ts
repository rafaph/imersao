import { makeSequelize } from "@app/infrastructure/db/database-provider";

export async function runWithDatabase(callback: () => Promise<void>): Promise<void> {
  const sequelize = await makeSequelize("sqlite::memory:");

  try {
    await callback();
  } finally {
    await sequelize.close();
  }
}
