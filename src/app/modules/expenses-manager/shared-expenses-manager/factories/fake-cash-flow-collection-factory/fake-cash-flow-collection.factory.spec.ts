import { TestBed, waitForAsync } from "@angular/core/testing";
import { CashFlowCollection } from "../../models/cash-flow-collection/cash-flow-collection.model";
import { FakeCashFlowCollectionFactory } from "./fake-cash-flow-collection.factory";

describe('FakeCashFlowCollectionFactory', () => {
    let factory: FakeCashFlowCollectionFactory;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({});
        factory = TestBed.inject(FakeCashFlowCollectionFactory);
    }));

    it('should create', () => {
        expect(factory).toBeTruthy();
    });

    it('craete', () => {
        const result = factory.create();
        expect(result.length).toBe(5);
        expect(result).toBeInstanceOf(CashFlowCollection);
    });
});