import { CashFlowCollection } from "../models/cash-flow-collection/cash-flow-collection.model";

export interface CashFlowCollectionFactory {
    create(): CashFlowCollection;
}