import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceRoomPage } from './device-room.page';

describe('DeviceRoomPage', () => {
  let component: DeviceRoomPage;
  let fixture: ComponentFixture<DeviceRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
