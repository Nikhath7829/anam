import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeglistPage } from './veglist.page';

describe('VeglistPage', () => {
  let component: VeglistPage;
  let fixture: ComponentFixture<VeglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
