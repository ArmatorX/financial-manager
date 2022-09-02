import { TestBed, waitForAsync } from "@angular/core/testing";
import { CashFlowCollection } from "../../models/cash-flow-collection/cash-flow-collection.model";
import { CsvCashFlowCollectionFactory } from "./csv-cash-flow-collection.factory";

describe('CsvCashFlowCollectionFactory', () => {
    let factory: CsvCashFlowCollectionFactory;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({});
        factory = TestBed.inject(CsvCashFlowCollectionFactory);
    }));

    it('should create', () => {
        expect(factory).toBeTruthy();
    });

    // it('craete', () => {
    //     const result = factory.create();
    //     expect(result.length).toBe(5);
    //     expect(result).toBeInstanceOf(CashFlowCollection);
    // })
});