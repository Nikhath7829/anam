import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdssPage } from './adss.page';

describe('AdssPage', () => {
  let component: AdssPage;
  let fixture: ComponentFixture<AdssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
