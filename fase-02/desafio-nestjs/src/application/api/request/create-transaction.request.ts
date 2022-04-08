import { IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { CreateTransactionUsecaseInput } from "@app/application/usecase/create-transaction.usecase";

export class CreateTransactionRequest implements CreateTransactionUsecaseInput {
  @IsString()
  @IsNotEmpty()
  public type!: string;

  @IsNumberString()
  @IsNotEmpty()
  public amount!: string;
}
