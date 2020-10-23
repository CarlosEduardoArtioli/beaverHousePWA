import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerListPage } from './timer-list.page';

describe('TimerListPage', () => {
  let component: TimerListPage;
  let fixture: ComponentFixture<TimerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
