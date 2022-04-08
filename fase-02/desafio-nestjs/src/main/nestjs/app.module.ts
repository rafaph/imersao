import { Module } from "@nestjs/common";
import { ApplicationModule } from "@app/application/application.module";
import { InfrastructureModule } from "@app/infrastructure/infrastructure.module";

@Module({
  imports: [InfrastructureModule, ApplicationModule],
})
export class AppModule {}
