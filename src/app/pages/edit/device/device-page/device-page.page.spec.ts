import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevicePagePage } from './device-page.page';

describe('DevicePagePage', () => {
  let component: DevicePagePage;
  let fixture: ComponentFixture<DevicePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevicePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
