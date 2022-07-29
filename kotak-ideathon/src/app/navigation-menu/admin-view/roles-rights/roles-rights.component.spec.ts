import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesRightsComponent } from './roles-rights.component';

describe('RolesRightsComponent', () => {
  let component: RolesRightsComponent;
  let fixture: ComponentFixture<RolesRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
