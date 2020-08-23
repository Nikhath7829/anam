import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransPage } from './trans.page';

describe('TransPage', () => {
  let component: TransPage;
  let fixture: ComponentFixture<TransPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
