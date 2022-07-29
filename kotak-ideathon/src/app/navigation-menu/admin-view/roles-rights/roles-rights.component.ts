import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-rights',
  templateUrl: './roles-rights.component.html',
  styleUrls: ['./roles-rights.component.css']
})
export class RolesRightsComponent implements OnInit {

  category_form: FormGroup;
  department_form: FormGroup;
  reviewer_form: FormGroup;
  add_admin_form: FormGroup;
  add_reviewer_form: FormGroup;
  add_reviewer_state = false;
  constructor() { }

  ngOnInit(): void {
    this.category_form = new FormGroup({
      'category': new FormControl(null),
    });
    this.department_form = new FormGroup({
      'department': new FormControl(null),
    });
    this.reviewer_form = new FormGroup({
      'department': new FormControl(null),
      'employe_name': new FormControl(null),
    });
    this.add_admin_form = new FormGroup({
      'add_admin_emp_code': new FormControl(null),
      'add_admin_emp_name': new FormControl('Rohit Sharma'),
      'add_admin_emp_department': new FormControl('Finance'),
      'add_admin_emp_designation': new FormControl('Chief Manager'),
    });
    this.add_reviewer_form = new FormGroup({
      'add_admin_emp_code': new FormControl(null),
      'add_admin_emp_name': new FormControl('Rohit Sharma'),
      'add_admin_emp_department': new FormControl('Finance'),
      'add_admin_emp_designation': new FormControl('Chief Manager'),
    });
  }
  onsubmit() {

  }
}
