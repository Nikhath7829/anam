import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinaleditPage } from './finaledit.page';

describe('FinaleditPage', () => {
  let component: FinaleditPage;
  let fixture: ComponentFixture<FinaleditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaleditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinaleditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
