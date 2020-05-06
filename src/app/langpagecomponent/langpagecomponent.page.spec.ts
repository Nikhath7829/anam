import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LangpagecomponentPage } from './langpagecomponent.page';

describe('LangpagecomponentPage', () => {
  let component: LangpagecomponentPage;
  let fixture: ComponentFixture<LangpagecomponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangpagecomponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LangpagecomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
