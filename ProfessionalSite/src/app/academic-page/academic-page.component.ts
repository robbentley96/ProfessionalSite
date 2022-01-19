import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-page',
  templateUrl: './academic-page.component.html',
  styleUrls: ['./academic-page.component.css']
})
export class AcademicPageComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  academicList = [
    {
      id:"1",
      title:"Masters Degree",
      location:"University of Exeter",
      startYear:"2014",
      endYear:"2018",
      content:"Mechanical Engineering - Upper Second Class"
    },
    {
      id:"2",
      title:"A-Levels",
      location:"Abbeyfield School",
      startYear:"2012",
      endYear:"2014",
      content:"A-Levels:\n"
    },
    {
      id:"3",
      title:"GCSEs",
      location:"Abbeyfield School",
      startYear:"2007",
      endYear:"2012",
      content:"GCSEs:\n"
    }
  ]
}
