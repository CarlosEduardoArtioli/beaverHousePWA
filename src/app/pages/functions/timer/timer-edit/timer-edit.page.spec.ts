import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerEditPage } from './timer-edit.page';

describe('TimerEditPage', () => {
  let component: TimerEditPage;
  let fixture: ComponentFixture<TimerEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
