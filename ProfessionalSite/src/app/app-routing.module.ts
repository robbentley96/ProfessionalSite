import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AcademicPageComponent } from './academic-page/academic-page.component';
import { EmploymentPageComponent } from './employment-page/employment-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "academic", component: AcademicPageComponent },
  { path: "employment", component: EmploymentPageComponent },
  { path: "projects", component: ProjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
