import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomIconPage } from './room-icon.page';

describe('RoomIconPage', () => {
  let component: RoomIconPage;
  let fixture: ComponentFixture<RoomIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomIconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
