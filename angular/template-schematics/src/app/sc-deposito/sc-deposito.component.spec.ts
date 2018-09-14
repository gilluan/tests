import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDepositoComponent } from './sc-deposito.component';

describe('ScDepositoComponent', () => {
  let component: ScDepositoComponent;
  let fixture: ComponentFixture<ScDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
