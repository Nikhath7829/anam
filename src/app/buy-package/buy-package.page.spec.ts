import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyPackagePage } from './buy-package.page';

describe('BuyPackagePage', () => {
  let component: BuyPackagePage;
  let fixture: ComponentFixture<BuyPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
