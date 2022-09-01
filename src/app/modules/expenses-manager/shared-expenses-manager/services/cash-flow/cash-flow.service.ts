import { Injectable } from '@angular/core';
import { CashFlowCollection } from '../../models/cash-flow-collection/cash-flow-collection.model';
import { TestCashFlowRepo } from '../../models/test-cash-flow-repo/test-cash-flow-repo.model';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {

  constructor() { }

  getTestCashFlows() {
    return new CashFlowCollection(...new TestCashFlowRepo().values());
  }
}
