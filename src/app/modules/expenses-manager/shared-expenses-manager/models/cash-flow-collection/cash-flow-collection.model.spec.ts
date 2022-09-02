import { waitForAsync } from "@angular/core/testing";
import { CATEGORIES } from "../../constants/categories.constant";
import { Currency } from "../../constants/currencies.constant";
import { Expense } from "../expense/expense.model";
import { CashFlowCollection } from "./cash-flow-collection.model";
const testData = [
    new Expense(10, Currency.PesoArgentino, new Date(),CATEGORIES[0]),
    new Expense(10, Currency.PesoArgentino, new Date(),CATEGORIES[0]),
    {
        amount: 30.0,
        currency: Currency.Dólar,
        date: new Date(), 
        category: CATEGORIES[2]
    }
];

describe('CashFlowCollection', () => {
    let cashFlows: CashFlowCollection;

    beforeEach(waitForAsync(() => {
        cashFlows = new CashFlowCollection(...testData);
    }));

    it('should create', () => {
        expect(cashFlows).toBeTruthy();
    });

    it('getExpenses', () => {
        expect(cashFlows.getExpenses().length).toBe(2);
    });

    it('totalExpenses', () => {
        expect(cashFlows.totalExpenses()).toBe(20);
    });
});