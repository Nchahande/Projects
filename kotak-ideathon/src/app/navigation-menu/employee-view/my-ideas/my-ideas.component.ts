import { DataService } from 'src/shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit {
  ideas = this.DataService.ideas;
  status_implemented = "assets/images/implemented-circle.svg";
  status_review = "assets/images/under_review.svg";
  status_warning = "assets/images/warning.svg";
  constructor(
    private DataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
