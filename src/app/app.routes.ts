import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';



const app_routes: Routes =[
    {path:' ', component:HomepageComponent},
    
    //{path:'**', pathMatch:'full', redirectTo:'home'}
    
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});