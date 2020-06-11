import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UppPage } from './upp.page';

describe('UppPage', () => {
  let component: UppPage;
  let fixture: ComponentFixture<UppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
