import { waitForAsync } from "@angular/core/testing";
import { CATEGORIES } from "../../constants/categories.constant";
import { Currency } from "../../constants/currencies.constant";
import { Expense } from "./expense.model";

describe('Expense', () => {
    let expense: Expense;

    beforeEach(waitForAsync(() => {
        expense = new Expense(10, Currency.PesoArgentino, new Date(),CATEGORIES[0]);
    }));

    it('should create', () => {
        expect(expense).toBeTruthy();
    });
});