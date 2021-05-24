import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service'

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {
  editInfo:any
  id:any
  constructor(
   private aluno:AlunosService,
   private router: ActivatedRoute
  ){ }

  ngOnInit () {
    this.router.params.subscribe((params:any) => {
      this.id = params.id
      this.editInfo = this.aluno.getDetailAluno(this.id)
    })
  }

}
