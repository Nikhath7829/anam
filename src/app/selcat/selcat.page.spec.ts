import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelcatPage } from './selcat.page';

describe('SelcatPage', () => {
  let component: SelcatPage;
  let fixture: ComponentFixture<SelcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelcatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
