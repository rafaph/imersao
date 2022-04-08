import { Column, DataType, Model, Table } from "sequelize-typescript";
import { TransactionProperties } from "@app/domain/model/transaction";

@Table({
  timestamps: false,
})
export class TransactionModel extends Model implements TransactionProperties {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  public id!: string;

  @Column({
    type: DataType.STRING,
  })
  public type!: string;

  @Column({
    type: DataType.STRING,
  })
  public amount!: string;
}

export const TransactionToken = "TRANSACTION_MODEL";

export const TransactionProvider = {
  provide: TransactionToken,
  useValue: TransactionModel,
};

export type TransactionType = typeof TransactionModel;
