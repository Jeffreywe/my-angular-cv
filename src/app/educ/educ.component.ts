import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {

  homsc:string[] = [
    "Homeschool", "01.04 - 12.19", "HighSchool Diploma", "May 17 2019"
  ]
  max:string[] = [
    "Max Technical Training", "01.22 - 04.21", "Full Stack Developer Certif", "April 19 2022"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
