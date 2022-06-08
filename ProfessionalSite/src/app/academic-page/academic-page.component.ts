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
      qualifications:[
        "Mechanical Engineering MEng - Upper Second Class (2:1)"
      ]  
    },
    {
      id:"2",
      title:"A-Levels",
      location:"Abbeyfield School",
      startYear:"2012",
      endYear:"2014",
      qualifications:[
        "Maths - A*",
        "Further Maths - A",
        "Physics - B",
        "Religious Studies - C"
      ]
    },
    {
      id:"3",
      title:"GCSEs",
      location:"Abbeyfield School",
      startYear:"2007",
      endYear:"2012",
      qualifications:[
        "Maths - A*",
        "Physics - A*",
        "Chemistry - A",
        "Biology - A",
        "English Literature - A",
        "English Language - A",
        "German - A",
        "Design & Technology - B",
        "Astronomy - B"
      ]
    }
  ]
}
