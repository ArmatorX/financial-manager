export class CsvCashFlow {
    datetime: Date;
    category: string;
    account: string;
    amountInDefaultCurrency: number;
    defaultCurrency: string;
    amountInAccountCurrency: number;
    accountCurrency: string;
    amountInTxCurrency?: number;
    txCurrency?: number;
    comment?: string;
}