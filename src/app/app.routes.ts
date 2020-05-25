import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EmprendedorpageComponent } from './pages/emprendedorpage/emprendedorpage.component';
import { InversionistapageComponent } from './pages/inversionistapage/inversionistapage.component';
import { LanzamientopageComponent } from './shared/lanzamientopage/lanzamientopage.component';



const app_routes: Routes =[
    {path:'', component:HomepageComponent},
    {path:'emprendedor', component: EmprendedorpageComponent},
    {path:'inversionista', component: InversionistapageComponent},
    {path:'lanzamiento', component: LanzamientopageComponent},
    {path:'**', pathMatch:'full', redirectTo:'/'}
    
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: false});