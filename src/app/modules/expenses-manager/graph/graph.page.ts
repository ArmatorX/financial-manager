import { Component, OnInit } from '@angular/core';
import { CashFlow } from '../shared-expenses-manager/interfaces/cash-flow.interface';
import { Expense } from '../shared-expenses-manager/models/expense/expense.model';
import { CashFlowService } from '../shared-expenses-manager/services/cash-flow/cash-flow.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  cashFlows: CashFlow[];
  totalExpenses: number = 0;
  constructor(private cashFlowService: CashFlowService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.cashFlows = this.cashFlowService.getTestCashFlows();

    this.cashFlows.forEach((cashFlow) => {
      if (cashFlow instanceof Expense) {
        this.totalExpenses += cashFlow.amount;
      }
    })
  }
}
