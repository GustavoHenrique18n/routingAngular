import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GuardAuthGuard } from './guards/guard-auth.guard';

const routes: Routes = [
  {path:'aluno',
   loadChildren: ()=>import('./alunos/alunos.module').then(m => m.AlunosModule),
   canActivate:[ GuardAuthGuard ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

