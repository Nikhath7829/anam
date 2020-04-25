import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PackagePage } from './package.page';

describe('PackagePage', () => {
  let component: PackagePage;
  let fixture: ComponentFixture<PackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
