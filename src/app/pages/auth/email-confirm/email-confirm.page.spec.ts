import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailConfirmPage } from './email-confirm.page';

describe('EmailConfirmPage', () => {
  let component: EmailConfirmPage;
  let fixture: ComponentFixture<EmailConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
