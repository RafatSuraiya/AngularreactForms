import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RootComponent} from './root/root.component';

const routes: Routes = [
  {path:'',component:RootComponent,
  children:[
    {path:'',component:LoginComponent},  
]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
