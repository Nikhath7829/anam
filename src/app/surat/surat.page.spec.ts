import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuratPage } from './surat.page';

describe('SuratPage', () => {
  let component: SuratPage;
  let fixture: ComponentFixture<SuratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
