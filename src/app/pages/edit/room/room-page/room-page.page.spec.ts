import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomPagePage } from './room-page.page';

describe('RoomPagePage', () => {
  let component: RoomPagePage;
  let fixture: ComponentFixture<RoomPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
