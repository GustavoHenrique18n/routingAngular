import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component'
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoNewComponent } from './aluno-new/aluno-new.component';


@NgModule({
  declarations: [
     AlunosComponent,
     AlunoDetalheComponent,
     AlunoEditComponent,
     AlunoNewComponent
    ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
