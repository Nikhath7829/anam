import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatspagePage } from './chatspage.page';

describe('ChatspagePage', () => {
  let component: ChatspagePage;
  let fixture: ComponentFixture<ChatspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
