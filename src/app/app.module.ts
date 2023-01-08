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
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      titleColor: "#d9d2d2",
      titleFontSize:"2.5rem",
      showImage: true,
      imageHeight:70,
      imageWidth:70,
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
