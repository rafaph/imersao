import { createApp } from "@app/main/nestjs/create-app";

export async function startApplication(): Promise<void> {
  const app = await createApp();
  await app.listen(3000);
}
