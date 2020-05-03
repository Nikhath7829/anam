import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterpopoverPage } from './registerpopover.page';

describe('RegisterpopoverPage', () => {
  let component: RegisterpopoverPage;
  let fixture: ComponentFixture<RegisterpopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterpopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterpopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
