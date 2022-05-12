import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicelementComponent } from './basicelement.component';

describe('BasicelementComponent', () => {
  let component: BasicelementComponent;
  let fixture: ComponentFixture<BasicelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
