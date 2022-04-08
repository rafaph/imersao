import { Transaction, TransactionProperties } from "@app/domain/model/transaction";

export class TransactionResponse implements TransactionProperties {
  public id!: string;
  public type!: string;
  public amount!: string;

  public constructor(transaction: Transaction) {
    Object.assign(this, transaction.toPlain());
  }
}
