import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceIconPage } from './device-icon.page';

describe('DeviceIconPage', () => {
  let component: DeviceIconPage;
  let fixture: ComponentFixture<DeviceIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
