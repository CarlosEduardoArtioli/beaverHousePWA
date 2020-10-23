import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimerDeviceListPage } from './timer-device-list.page';

describe('TimerDeviceListPage', () => {
  let component: TimerDeviceListPage;
  let fixture: ComponentFixture<TimerDeviceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerDeviceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerDeviceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
