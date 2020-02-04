import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysComponent } from './wys.component';

describe('WysComponent', () => {
  let component: WysComponent;
  let fixture: ComponentFixture<WysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
