import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerMenuComponent } from './reviewer-menu.component';

describe('ReviewerMenuComponent', () => {
  let component: ReviewerMenuComponent;
  let fixture: ComponentFixture<ReviewerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
