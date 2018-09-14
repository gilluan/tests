import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDaylanComponent } from './sc-daylan.component';

describe('ScDaylanComponent', () => {
  let component: ScDaylanComponent;
  let fixture: ComponentFixture<ScDaylanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScDaylanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScDaylanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
