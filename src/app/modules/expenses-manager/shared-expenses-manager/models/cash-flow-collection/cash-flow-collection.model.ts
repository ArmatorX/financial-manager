import { CashFlow } from '../../interfaces/cash-flow.interface';
import { Expense } from '../expense/expense.model';

export class CashFlowCollection extends Array<CashFlow> {
  getExpenses(): Expense[] {
    return this.filter((cashFlow: CashFlow) => cashFlow instanceof Expense) as Expense[];
  }

  totalExpenses(): number {
    return this.getExpenses()
      .map((cashFlow: CashFlow) => cashFlow.amount)
      .reduce((prev: number, current: number) => (current += prev));
  }
}
