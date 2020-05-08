import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrayPage } from './array.page';

describe('ArrayPage', () => {
  let component: ArrayPage;
  let fixture: ComponentFixture<ArrayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
