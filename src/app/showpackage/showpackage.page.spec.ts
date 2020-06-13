import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowpackagePage } from './showpackage.page';

describe('ShowpackagePage', () => {
  let component: ShowpackagePage;
  let fixture: ComponentFixture<ShowpackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowpackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
