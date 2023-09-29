import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ResumeComponent } from './component/resume/resume.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  {path:"Resume",component:ResumeComponent},
  {path:"About",component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
