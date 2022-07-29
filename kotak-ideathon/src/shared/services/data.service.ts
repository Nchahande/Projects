import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  ideas = [
    {
      _id: 1,
      title: "Implement HR system",
      description: "A short description about the idea",
      department: "HR",
      category: "Process Efficiency",
      status: "Implemented",
      status_code: "001",
      rating: 1
    },
    {
      _id: 2,
      title: "Implement HR system",
      description: "A short description about the idea ",
      department: "Administration",
      category: "Core Values",
      status: "Implemented",
      status_code: "001",
      rating: 3
    },
    {
      _id: 3,
      title: "Implement HR system",
      description: "A short description about the idea ",
      department: "Operations",
      category: "Value proposition",
      status: "Under Review",
      status_code: "002",
      rating: 0
    },
    {
      _id: 4,
      title: "Implement HR system",
      description: "A short description about the idea ",
      department: "HR",
      category: "Technology",
      status: "Implement Later",
      status_code: "003",
      rating: 4
    }
  ]
}
