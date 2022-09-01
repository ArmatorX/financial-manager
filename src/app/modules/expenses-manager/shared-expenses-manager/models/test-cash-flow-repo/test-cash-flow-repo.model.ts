import { CATEGORIES } from "../../constants/categories.constant";
import { Currency } from "../../constants/currencies.constant";
import { CashFlowRepo } from "../../interfaces/cash-flow-repo.interface";
import { Expense } from "../expense/expense.model";

export class TestCashFlowRepo implements CashFlowRepo {
    constructor() {}

    values(): any[] {
        return [
            new Expense(10, Currency.PesoArgentino, new Date(),CATEGORIES[0]),
            new Expense(20, Currency.PesoArgentino, new Date(),CATEGORIES[0]),
            new Expense(123.023, Currency.PesoArgentino, new Date(),CATEGORIES[1]),
            new Expense(32.2, Currency.PesoArgentino, new Date(),CATEGORIES[2]),
            {
                amount: 30.0,
                currency: Currency.Dólar,
                date: new Date(), 
                category: CATEGORIES[2]
            }
        ]
    }
}