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
      description:"This app gives a count of all words used in a WhatsApp group chat and a count of how many messages each participant has sent. A list of names and an exported WhatsApp group chat must be provided with the file names seen.",
      github:"https://github.com/robbentley96/WhatsApp-Group-Chat-Analytics",
      screenshot:"WhatsAppScreenshot"
    },
    {
      id:"2",
      title:"Tournament Scheduler",
      technology:"C# Azure Function App",
      description:"This API returns a tournament schedule when provided with a list of teams, number of pitches and length of game time.",
      github:"https://github.com/robbentley96/Tournament-Scheduler-API",
      screenshot:"TournamentScreenshot"
    },
    {
      id:"3",
      title:"Kaprekar",
      technology:"C#",
      description:"This app recursively calls an algorithm whereby a 4 digit number (inputted by the user) is arranged ascendingly by its digits and subtracted from the digits arranged descendingly. This gives the new number the algorithm can be performed on. When called recursively, provided 4 repeating digits are not used, the algorithm always converges to 6471 (the kaprekar constant).",
      github:"https://github.com/robbentley96/Kaprekar",
      screenshot:"KaprekarScreenshot"
    }
  ]
}
