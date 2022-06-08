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
      content:"I am working as a developer in a scrum (agile) team for a legal services client. I have been developing APIs which are deployed on Azure, querying/updating databases via SQL & Entity Framework, using Azure Cognitive Services (primarily Forms Recogniser), creating user interfaces with Angular and creating Power Automate flows. Working at this client has enabled me to gain confidence as a developer whilst learning new technologies and techniques from more senior developers as well as guiding and advising other developers.",
      logo:"SpartaLogo"
    },
    {
      id:"2",
      title:"Trainee Developer",
      location:"Sparta Global",
      startDate:"September 2020",
      endDate:"March 2021",
      content:"Whilst in the Sparta Global academy, I undertook an intense course which covered the basics of C#, Object Oriented Programming principles, unit testing, APIs (RestSharp), web development (ASP.NET), API testing and web testing (Selenium & Specflow). This experience gave me the skills I needed to thrive in a professional tech environment.",
      logo:"SpartaLogo"
    },
    {
      id:"3",
      title:"Subsea Engineer",
      location:"Peritus International",
      startDate:"November 2018",
      endDate:"September 2020",
      content:"At Peritus, I would perform calculations and simulations of subsea pipelines to verify their suitability for the project. This included modelling the spans of the pipeline on the seabed and calculating the required wall thickness/coatings for pipelines to not burst, collapse or buckle.",
      logo:"PeritusLogo"
    }
  ]
}
