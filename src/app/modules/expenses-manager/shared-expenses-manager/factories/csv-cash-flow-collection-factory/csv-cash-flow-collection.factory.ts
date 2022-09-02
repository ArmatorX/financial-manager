import { Injectable } from '@angular/core';
import { CashFlowCollection } from '../../models/cash-flow-collection/cash-flow-collection.model';
import { CashFlowCollectionFactory } from '../cash-flow-factory.interface';
@Injectable({ providedIn: 'root' })
export class CsvCashFlowCollectionFactory implements CashFlowCollectionFactory {
  constructor() {}

  create(): CashFlowCollection {
    return;
  }
}
