import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './main/education/education.component';
import { WorkComponent } from './main/work/work.component';
import { LanguagesComponent } from './main/languages/languages.component';
import { SkillsComponent } from './main/skills/skills.component';
import { AsideComponent } from './aside/aside.component';
import { AboutMeComponent } from './aside/about-me/about-me.component';
import { ContactComponent } from './aside/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EducationComponent,
    WorkComponent,
    LanguagesComponent,
    SkillsComponent,
    AsideComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
