import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerAddPage } from './timer-add.page';

describe('TimerAddPage', () => {
  let component: TimerAddPage;
  let fixture: ComponentFixture<TimerAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
