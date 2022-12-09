import { NavController } from "@ionic/angular";
import { Fake } from "./fake.interface.spec";

export class FakeNavController implements Fake {
  private _aSpy: jasmine.SpyObj<NavController>;

  get spy(): jasmine.SpyObj<NavController> {
    return this._aSpy;
  }

  private constructor(
    private readonly _aNavigateForwardResponse: any,
    private readonly _aNavigateBackResponse: any,
    private readonly _aNavigateRootResponse: any,
  ) {
    this.createSpy();
  }

  public static create(
    aNavigateForwardResponse = null,
    aNavigateBackResponse = null,
    aNavigateRootResponse = null,
  ): FakeNavController {
    return new FakeNavController(aNavigateForwardResponse, aNavigateBackResponse, aNavigateRootResponse);
  }

  createSpy() {
    this._aSpy = jasmine.createSpyObj('NavController', [
      'navigateForward',
      'navigateBack',
      'navigateRoot',
      'consumeTransition',
      'back',
    ]);
    this.modifyReturns(
      this._aNavigateForwardResponse,
      this._aNavigateBackResponse,
      this._aNavigateRootResponse,
    );
    return this._aSpy;
  }

  modifyReturns(
    aNavigateForwardResponse,
    aNavigateBackResponse,
    aNavigateRootResponse,
  ) {
    this._aSpy.navigateForward.and.returnValue(Promise.resolve(aNavigateForwardResponse));
    this._aSpy.navigateBack.and.returnValue(Promise.resolve(aNavigateBackResponse));
    this._aSpy.navigateRoot.and.returnValue(Promise.resolve(aNavigateRootResponse));
  }
}
