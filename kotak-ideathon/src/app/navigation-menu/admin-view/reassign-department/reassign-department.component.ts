import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reassign-department',
  templateUrl: './reassign-department.component.html',
  styleUrls: ['./reassign-department.component.css']
})
export class ReassignDepartmentComponent implements OnInit {

  reassign_form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reassign_form = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'department': new FormControl(null, [Validators.required, this.Validate]),
      'category': new FormControl(null, [Validators.required, this.Validate]),
      // 'upload_idea': new FormControl(null, Validators.required)
    })
  }
  Validate(control: AbstractControl) {
    if (control.value?.includes(null)) {
      return { invalid: true };
    }
    return null;
  }
  onsubmit(){

  }
}
