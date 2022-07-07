import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './main/education/education.component';
import { LanguagesComponent } from './main/languages/languages.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './main/skills/skills.component';
import { WorkComponent } from './main/work/work.component';

const appRoutes:Routes =[
    {path:'', component:MainComponent, children:[
        {path: 'education', component:EducationComponent},
        {path: '', redirectTo:'education', pathMatch:'full'},
        {path: 'work-experience', component:WorkComponent},
        {path: 'languages', component:LanguagesComponent},
        {path: 'skills', component:SkillsComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}