import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, NavController } from '@ionic/angular';
import { FakeNavController } from 'src/app/shared/fakes/nav-controller.fake.spec';
import { GraphPage } from './graph.page';

describe('GraphPage', () => {
  let component: GraphPage;
  let fixture: ComponentFixture<GraphPage>;
  let fakeNavController: FakeNavController;

  beforeEach(waitForAsync(() => {
    fakeNavController = FakeNavController.create();
    TestBed.configureTestingModule({
      declarations: [ GraphPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: NavController, useValue: fakeNavController.spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to create cashflow page', async () => {
    fixture.debugElement.query(By.css('ion-button[name="go-to-create-cash-flow"]')).nativeElement.click();
    await fixture.whenStable();
    expect(fakeNavController.spy.navigateForward).toHaveBeenCalledOnceWith(['/expenses/create']);
  });
});
