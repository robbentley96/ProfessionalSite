import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectList = [
    {
      id:"1",
      title:"WhatsApp Analytics",
      technology:"C#",
      description:"This app gives a count of all words used in a WhatsApp group chat and a count of how many messages each participant has sent."
    },
    {
      id:"2",
      title:"Tournament Scheduler",
      technology:"C# Azure Function",
      description:"This API returns a tournament schedule when provided with a list of teams and length of game time."
    },
    {
      id:"3",
      title:"WhatsApp Analytics",
      technology:"C#",
      description:"Working as a developer for a legal services client."
    }
  ]
}
