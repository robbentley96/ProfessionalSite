import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-page',
  templateUrl: './employment-page.component.html',
  styleUrls: ['./employment-page.component.css']
})
export class EmploymentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employmentList = [
    {
      id:"1",
      title:"Full Stack Developer",
      location:"Sparta Global",
      startDate:"March 2021",
      endDate:"Present",
      content:"Working as a developer for a legal services client."
    },
    {
      id:"2",
      title:"Trainee Developer",
      location:"Sparta Global",
      startDate:"September 2020",
      endDate:"March 2021",
      content:"Being trained as a developer"
    },
    {
      id:"3",
      title:"Subsea Engineer",
      location:"Peritus International",
      startDate:"November 2018",
      endDate:"September 2020",
      content:"Working on the analysis of subsea pipelines"
    }
  ]
}
