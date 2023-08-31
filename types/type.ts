export type TransactionDataType = {
  transactionDate?: Date;
  invoiceNumber?: string;
  payer?: string;
  payee?: string;
  amount?: number;
  status?: string | "First" | "Second" | "Third"
}
