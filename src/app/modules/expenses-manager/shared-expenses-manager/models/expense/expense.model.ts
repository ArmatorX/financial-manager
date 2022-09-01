import { Currency } from "../../constants/currencies.constant";
import { CashFlow } from "../../interfaces/cash-flow.interface";
import { Category } from "../../interfaces/category.interface";

export class Expense implements CashFlow {
    amount: number;
    currency: Currency;
    date: Date;
    category: Category;

    constructor(
        private readonly _anAmount: number,
        private readonly _aCurrency: Currency,
        private readonly _aDate: Date,
        private readonly _aCategory: Category
    ) {
        this.amount = this._anAmount;
        this.currency = this._aCurrency;
        this.date = this._aDate;
        this.category = this._aCategory;
    }
}