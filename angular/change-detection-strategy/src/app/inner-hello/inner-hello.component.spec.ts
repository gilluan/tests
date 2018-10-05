import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHelloComponent } from './inner-hello.component';

describe('InnerHelloComponent', () => {
  let component: InnerHelloComponent;
  let fixture: ComponentFixture<InnerHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
