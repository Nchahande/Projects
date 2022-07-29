import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignDepartmentComponent } from './reassign-department.component';

describe('ReassignDepartmentComponent', () => {
  let component: ReassignDepartmentComponent;
  let fixture: ComponentFixture<ReassignDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReassignDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
