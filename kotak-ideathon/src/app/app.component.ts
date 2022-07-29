import { Component } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model;
  
  toast_state = false;
  title = 'kotak-ideathon';
  constructor() { }
  show_toast() {
    setTimeout(() => {
      this.toast_state = true;
      setTimeout(() => {
        this.toast_state = false;
      }, 5000);
    }, 0);
  }
  close_toast(){
    this.toast_state = false;
  }
}
