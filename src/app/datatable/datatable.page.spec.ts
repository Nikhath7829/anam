import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatatablePage } from './datatable.page';

describe('DatatablePage', () => {
  let component: DatatablePage;
  let fixture: ComponentFixture<DatatablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatatablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
