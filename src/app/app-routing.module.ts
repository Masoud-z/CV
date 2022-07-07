import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './main/education/education.component';
import { MainComponent } from './main/main.component';
import { WorkComponent } from './main/work/work.component';

const appRoutes:Routes =[
    {path:'', component:MainComponent, children:[
        {path: 'education', component:EducationComponent},
        {path: '', redirectTo:'education', pathMatch:'full'},
        {path: 'work-experience', component:WorkComponent}
    ]}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}