import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdsinfoPage } from './adsinfo.page';

describe('AdsinfoPage', () => {
  let component: AdsinfoPage;
  let fixture: ComponentFixture<AdsinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdsinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
