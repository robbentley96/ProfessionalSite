import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AcademicPageComponent } from './academic-page/academic-page.component';
import { EmploymentPageComponent } from './employment-page/employment-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AcademicPageComponent,
    EmploymentPageComponent,
    NavBarComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
