import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserBoxComponent } from './info-user-box.component';

describe('InfoUserBoxComponent', () => {
  let component: InfoUserBoxComponent;
  let fixture: ComponentFixture<InfoUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
