import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInfoBoxComponent } from './send-info-box.component';

describe('SendInfoBoxComponent', () => {
  let component: SendInfoBoxComponent;
  let fixture: ComponentFixture<SendInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
