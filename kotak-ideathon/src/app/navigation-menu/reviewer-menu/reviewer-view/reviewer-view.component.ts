import { DataService } from 'src/shared/services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reviewer-view',
  templateUrl: './reviewer-view.component.html',
  styleUrls: ['./reviewer-view.component.css'],
})
export class ReviewerViewComponent implements OnInit {
  ideas = this.DataService.ideas;
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
        case 0:
          this.reviewer_input.get('rating').setValue({
            one: false,
            two: false,
            three: false,
            four: false,
            five: false
          });
          break;
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
      this.reviewer_input?.get('status').setValue(this.idea[0].status_code);
      this.reviewer_input?.get('status').value != '002' ? this.reviewer_input?.get('status').disable() : this.reviewer_input?.get('status').enable();
    })
  }
  ngOnInit(): void {
    this.reviewer_input = new FormGroup({
      'rating': new FormGroup({
        'one': new FormControl(null),
        'two': new FormControl(null),
        'three': new FormControl(null),
        'four': new FormControl(null),
        'five': new FormControl(null)
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
