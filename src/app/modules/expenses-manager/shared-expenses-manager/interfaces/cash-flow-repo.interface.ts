import { CashFlow } from "./cash-flow.interface";

export interface CashFlowRepo {
    values(): CashFlow[];
}