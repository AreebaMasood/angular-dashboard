import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiiconComponent } from './midiicon.component';

describe('MidiiconComponent', () => {
  let component: MidiiconComponent;
  let fixture: ComponentFixture<MidiiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidiiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
