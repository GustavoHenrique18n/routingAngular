import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoNewComponent } from './aluno-new/aluno-new.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';

const alunosRoutes:any = [
  {path:'' , component: AlunosComponent,},
  {path:'new' , component: AlunoNewComponent },
  {path:':id' , component: AlunoDetalheComponent},
  {path:':id/edit' , component: AlunoEditComponent}
]

@NgModule({
  imports:[RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {}

