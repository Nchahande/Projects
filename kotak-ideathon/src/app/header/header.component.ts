import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  idea_form: FormGroup;
  @Output() idea_submitted = new EventEmitter();
  constructor(
    private router: Router
  ) { }
  route_path = ''
  ngOnInit(): void {
    this.idea_form = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'department': new FormControl(null, [Validators.required, this.Validate]),
      'category': new FormControl(null, [Validators.required, this.Validate]),
      // 'upload_idea': new FormControl(null, Validators.required)
    })
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.route_path = event.url.split('/')[1];
      }
    })
  }
  Validate(control: AbstractControl) {
    if (control.value?.includes(null)) {
      return { invalid: true };
    }
    return null;
  }
  onsubmit(){
    this.idea_form.reset()
    this.idea_submitted.emit()
  }
}
