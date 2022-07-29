import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  ideas = this.DataService.ideas;
  status_implemented = "assets/images/implemented-circle.svg";
  status_review = "assets/images/under_review.svg";
  status_warning = "assets/images/warning.svg";
  idea_form: FormGroup;
  filter_form: FormGroup;
  report_form: FormGroup;
  filter_change_state = true;
  filter_length = 0;
  toggle_filter_state = true;
  filter = {
    'filter_status': null,
    'filter_dept': null,
    'filter_category': null,
    'filter_rating': null
  }
  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
    this.filter_form = new FormGroup({
      'filter_status': new FormControl(null),
      'filter_dept': new FormControl(null),
      'filter_category': new FormControl(null),
      'filter_rating': new FormControl(null)
    });
    this.report_form = new FormGroup({
      'from_date': new FormControl('From Date', Validators.required),
      'to_date': new FormControl('To Date', Validators.required),
    })

    this.idea_form = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'department': new FormControl(null, [Validators.required, this.Validate]),
      'category': new FormControl(null, [Validators.required, this.Validate]),
      // 'upload_idea': new FormControl(null, Validators.required)
    })
    this.filter_form.valueChanges.subscribe((data) => {
      this.filter.filter_status = data.filter_status;
      this.filter.filter_dept = data.filter_dept;
      this.filter.filter_category = data.filter_category;
      this.filter.filter_rating = data.filter_rating;
      this.filter_change_state = Object.values(this.filter).every(value => {
        return value === null;
      });
      const emptyValues = new Set(["", null, undefined]);
      this.filter_length = Object.values(this.filter).reduce((acc,curr) => acc + emptyValues.has(curr), 0);
    });
  }
  onsubmit() {

  }
  Validate(control: AbstractControl) {
    if (control.value?.includes(null)) {
      return { invalid: true };
    }
    return null;
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
