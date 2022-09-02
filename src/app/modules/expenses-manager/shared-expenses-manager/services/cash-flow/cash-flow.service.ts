import { Injectable } from '@angular/core';
import { CashFlowCollection } from '../../models/cash-flow-collection/cash-flow-collection.model';
import { FakeCashFlowCollectionFactory } from '../../factories/fake-cash-flow-collection-factory/fake-cash-flow-collection.factory';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {
  constructor(private factory: FakeCashFlowCollectionFactory) { }

  getTestCashFlows(): CashFlowCollection {
    return this.factory.create();
  }
}
