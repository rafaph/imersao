export const TransactionType = ["CREDIT", "DEBIT"] as const;
export type TransactionType = typeof TransactionType[number];
