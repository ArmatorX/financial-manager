import { waitForAsync } from "@angular/core/testing";
import { CATEGORIES } from "../../constants/categories.constant";
import { Currency } from "../../constants/currencies.constant";
import { Income } from "./income.model";

describe('Income', () => {
    let income: Income;

    beforeEach(waitForAsync(() => {
        income = new Income(10, Currency.PesoArgentino, new Date(),CATEGORIES[0]);
    }));

    it('should create', () => {
        expect(income).toBeTruthy();
    });
});