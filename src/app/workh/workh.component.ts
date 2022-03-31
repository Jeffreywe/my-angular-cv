import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workh',
  templateUrl: './workh.component.html',
  styleUrls: ['./workh.component.css']
})
export class WorkhComponent implements OnInit {

  qGold:string[] = [
    "Polisher", "Quality Gold", "04.21 - 12.21", "Removed imperfections, polished jewelry"
  ]
  qcec:string[] = [
    "Caregiver", "Queen City Elder Care", "01.18 - 03.21", "Offer companionship, assist with daily needs"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
