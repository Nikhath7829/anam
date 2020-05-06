import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdspagePage } from './adspage.page';

describe('AdspagePage', () => {
  let component: AdspagePage;
  let fixture: ComponentFixture<AdspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
