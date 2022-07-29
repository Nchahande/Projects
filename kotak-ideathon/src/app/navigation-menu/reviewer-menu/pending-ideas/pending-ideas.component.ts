import { DataService } from 'src/shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import 'jquery';
declare var $: any;
import 'lodash';
declare var _: any;
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-pending-ideas',
  templateUrl: './pending-ideas.component.html',
  styleUrls: ['./pending-ideas.component.css']
})
export class PendingIdeasComponent implements OnInit {
  ideas = _.filter(this.DataService.ideas, { status_code: '002' });
  idea = null;
  rating: any = 0
  //dynamic image paths
  status_implemented = "assets/images/implemented-circle.svg";
  status_review = "assets/images/under_review.svg";
  status_warning = "assets/images/warning.svg";
  //reactive forms declaration
  reviewer_input: FormGroup;
  constructor(
    private DataService: DataService
  ) { }
  toggle_sidebar(event: number) {
    const promise = new Promise((resolve, reject) => {
      resolve(this.idea = [this.DataService.ideas.find((idea) => {
        return idea._id === event;
      })])
    })
    promise.then(() => {
      (<any>$("#act_modal")).modal('show');
      switch (this.idea[0].rating) {
        case 1:
          this.reviewer_input.get('rating').setValue({
            one: true,
            two: false,
            three: false,
            four: false,
            five: false
          });
          break;
        case 2:
          this.reviewer_input.get('rating').setValue({
            one: true,
            two: true,
            three: false,
            four: false,
            five: false
          });
          break;
        case 3:
          this.reviewer_input.get('rating').setValue({
            one: true,
            two: true,
            three: true,
            four: false,
            five: false
          });
          break;
        case 4:
          this.reviewer_input.get('rating').setValue({
            one: true,
            two: true,
            three: true,
            four: true,
            five: false
          });
          break;
        case 5:
          this.reviewer_input.get('rating').setValue({
            one: true,
            two: true,
            three: true,
            four: true,
            five: true
          });
          break;
        default:
          break;
      }
    })
  }
  ngOnInit(): void {
    this.reviewer_input = new FormGroup({
      'rating': new FormGroup({
        'one': new FormControl(false),
        'two': new FormControl(false),
        'three': new FormControl(false),
        'four': new FormControl(false),
        'five': new FormControl(false)
      }),
      'status': new FormControl(null)
    });
    this.reviewer_input.valueChanges.subscribe((data) => {
      this.rating = Object.values(data.rating).reduce((a: any, item: any) => a + item, 0);
    })
  }
  click_rating(data: string) {
    switch (data) {
      case 'one':
        switch (this.reviewer_input.get('rating.one').value) {
          case true:
            this.reviewer_input.get('rating').setValue({
              one: false,
              two: false,
              three: false,
              four: false,
              five: false
            })
            break;
          case false:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: false,
              three: false,
              four: false,
              five: false
            })
            break;
          default:
            break;
        }
        break;
      case 'two':
        switch (this.reviewer_input.get('rating.two').value) {
          case true:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: false,
              three: false,
              four: false,
              five: false
            })
            break;
          case false:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: false,
              four: false,
              five: false
            })
            break;
          default:
            break;
        }
        break;
      case 'three':
        switch (this.reviewer_input.get('rating.three').value) {
          case true:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: false,
              four: false,
              five: false
            })
            break;
          case false:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: true,
              four: false,
              five: false
            })
            break;
          default:
            break;
        }
        break;
      case 'four':
        switch (this.reviewer_input.get('rating.four').value) {
          case true:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: true,
              four: false,
              five: false
            })
            break;
          case false:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: true,
              four: true,
              five: false
            })
            break;
          default:
            break;
        }
        break;
      case 'five':
        switch (this.reviewer_input.get('rating.five').value) {
          case true:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: true,
              four: true,
              five: false
            })
            break;
          case false:
            this.reviewer_input.get('rating').setValue({
              one: true,
              two: true,
              three: true,
              four: true,
              five: true
            })
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  onsubmit() {
    (<any>$("#act_modal")).modal('hide')
  }
}
// data-bs-toggle="modal"
// data-bs-target="#act_modal"
