import { Currency } from "../constants/currencies.constant";
import { Category } from "./category.interface";

export interface CashFlow {
    amount: number;
    currency: Currency;
    date: Date;
    category: Category;
}