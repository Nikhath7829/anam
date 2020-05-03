import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginpopoverPage } from './loginpopover.page';

describe('LoginpopoverPage', () => {
  let component: LoginpopoverPage;
  let fixture: ComponentFixture<LoginpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
