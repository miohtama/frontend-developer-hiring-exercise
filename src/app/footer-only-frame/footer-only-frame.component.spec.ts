import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOnlyFrameComponent } from './footer-only-frame.component';

describe('FooterOnlyFrameComponent', () => {
  let component: FooterOnlyFrameComponent;
  let fixture: ComponentFixture<FooterOnlyFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterOnlyFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOnlyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
