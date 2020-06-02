import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrulistPage } from './frulist.page';

describe('FrulistPage', () => {
  let component: FrulistPage;
  let fixture: ComponentFixture<FrulistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrulistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrulistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
