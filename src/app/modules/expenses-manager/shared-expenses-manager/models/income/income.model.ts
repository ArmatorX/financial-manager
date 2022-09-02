import { Currency } from "../../constants/currencies.constant";
import { CashFlow } from "../../interfaces/cash-flow.interface";
import { Category } from "../../interfaces/category.interface";

export class Income implements CashFlow {
    constructor(
        public readonly amount: number,
        public readonly currency: Currency,
        public readonly date: Date,
        public readonly category: Category
    ) {}
}