import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFrameComponent } from './full-frame.component';

describe('FullFrameComponent', () => {
  let component: FullFrameComponent;
  let fixture: ComponentFixture<FullFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
