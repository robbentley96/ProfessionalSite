import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ClickHomeButton(): void {
    this.router.navigateByUrl('/');
  }

  ClickAcademicButton(): void {
    this.router.navigateByUrl('/academic');
  }

  ClickEmploymentButton(): void {
    this.router.navigateByUrl('/employment');
  }

  ClickProjectsButton(): void {
    this.router.navigateByUrl('/projects');
  }
}
