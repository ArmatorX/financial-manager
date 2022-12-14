;import { Component, OnInit } from '@angular/core';
import { CashFlowCollection } from '../shared-expenses-manager/models/cash-flow-collection/cash-flow-collection.model';
import { Expense } from '../shared-expenses-manager/models/expense/expense.model';
import { CashFlowService } from '../shared-expenses-manager/services/cash-flow/cash-flow.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  private cashFlows: CashFlowCollection;
  expenses: Expense[];
  totalExpenses: number = 0;
  constructor(private cashFlowService: CashFlowService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.cashFlows = this.cashFlowService.getTestCashFlows();
    this.expenses = this.cashFlows.getExpenses();
    this.totalExpenses = this.cashFlows.totalExpenses();
  }
}
