import { Transaction } from "@app/domain/model/transaction";
import { UUID } from "@app/domain/model/uuid";

export abstract class TransactionRepository {
  public abstract create(transaction: Transaction): Promise<void>;
  public abstract find(id: UUID): Promise<Transaction | null>;
  public abstract list(): Promise<Transaction[]>;
}
