import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent} from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillComponent } from './components/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillItemComponent } from './components/skill/skill-item/skill-item.component';
import { ProjectItemComponent } from './components/project/project-item/project-item.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';
import { EducationItemComponent } from './components/education/education-item/education-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectComponent,
    SkillComponent,
    SkillItemComponent,
    ProjectItemComponent,
    ExperienceItemComponent,
    EducationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      titleColor: "#red",
      titleFontSize:"1.1rem",
      showImage: false,
      showSubtitle: false,
      showUnits: false,
      outerStrokeWidth: 10,
      innerStrokeWidth: 1,
      outerStrokeColor: "#0d6efd",
      innerStrokeColor: "#afc8fe",
      animation:true,
      animationDuration: 700})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
