import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalistSignUpComponent } from './journalist-sign-up.component';

describe('JournalistSignUpComponent', () => {
  let component: JournalistSignUpComponent;
  let fixture: ComponentFixture<JournalistSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalistSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalistSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
