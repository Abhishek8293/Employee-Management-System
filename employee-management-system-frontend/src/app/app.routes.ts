import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'add-employee',component:AddEmployeeComponent}
];
