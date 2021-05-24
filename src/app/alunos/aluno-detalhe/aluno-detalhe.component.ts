import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service'
@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  detailAlun:any
  id:any
  constructor(
    private aluno:AlunosService,
    private router: ActivatedRoute
  ) {}

  ngOnInit () {
    this.router.params.subscribe((params:any) => {
      this.id = params.id
      this.detailAlun = this.aluno.getDetailAluno(this.id)
    })
  }

}
