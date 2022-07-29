import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reviewer-menu',
  templateUrl: './reviewer-menu.component.html',
  styleUrls: ['./reviewer-menu.component.css']
})
export class ReviewerMenuComponent implements OnInit {
  review_form!: FormGroup;
  filter_form: FormGroup;
  filter_change_state = true;
  filter_length = 0;
  toggle_filter_state = false;
  filter = {
    'filter_status': null,
    'filter_dept': null,
    'filter_category': null,
    'filter_rating': null
  }
  constructor() { }

  ngOnInit(): void {
    this.review_form = new FormGroup({
      'review': new FormControl('Under Review'),
    });
    this.filter_form = new FormGroup({
      'filter_status': new FormControl(null),
      'filter_dept': new FormControl(null),
      'filter_category': new FormControl(null),
      'filter_rating': new FormControl(null)
    });
    this.filter_form.valueChanges.subscribe((data) => {
      this.filter.filter_status = data.filter_status;
      this.filter.filter_dept = data.filter_dept;
      this.filter.filter_category = data.filter_category;
      this.filter.filter_rating = data.filter_rating;
      this.filter_change_state = Object.values(this.filter).every(value => {
        return value === null;
      });
      const emptyValues = new Set(["", null, undefined]);
      this.filter_length = Object.values(this.filter).reduce((acc, curr) => acc + emptyValues.has(curr), 0);
    });
  }
  toggle_filter() {
    this.toggle_filter_state = !this.toggle_filter_state;
  }
  clear_input(field: string) {
    switch (field) {
      case 'filter_status':
        this.filter_form.get('filter_status').setValue(null);
        break;
      case 'filter_dept':
        this.filter_form.get('filter_dept').setValue(null);
        break;
      case 'filter_category':
        this.filter_form.get('filter_category').setValue(null);
        break;
      case 'filter_rating':
        this.filter_form.get('filter_rating').setValue(null);
        break;
      default:
        break;
    }
  }
}
