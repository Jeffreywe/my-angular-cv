import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhComponent } from './workh.component';

describe('WorkhComponent', () => {
  let component: WorkhComponent;
  let fixture: ComponentFixture<WorkhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
