import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "@app/main/nestjs/app.module";
import { exceptionFactory } from "@app/main/nestjs/exception-factory";

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory,
    }),
  );

  return app;
}
