import { Injectable } from '@angular/core';
import { CATEGORIES } from '../../constants/categories.constant';
import { Currency } from '../../constants/currencies.constant';
import { CashFlowCollectionFactory } from '../cash-flow-factory.interface';
import { CashFlowCollection } from '../../models/cash-flow-collection/cash-flow-collection.model';
import { Expense } from '../../models/expense/expense.model';
@Injectable({ providedIn: 'root' })
export class FakeCashFlowCollectionFactory
  implements CashFlowCollectionFactory
{
  constructor() {}

  create(): CashFlowCollection {
    return new CashFlowCollection(
      ...[
        new Expense(10, Currency.PesoArgentino, new Date(), CATEGORIES[0]),
        new Expense(20, Currency.PesoArgentino, new Date(), CATEGORIES[0]),
        new Expense(123.023, Currency.PesoArgentino, new Date(), CATEGORIES[1]),
        new Expense(32.2, Currency.PesoArgentino, new Date(), CATEGORIES[2]),
        {
          amount: 30.0,
          currency: Currency.Dólar,
          date: new Date(),
          category: CATEGORIES[2],
        },
      ]
    );
  }
}
