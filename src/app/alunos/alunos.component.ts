import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service'
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  getAluno:any[] = []

  constructor(private aluno: AlunosService) { }

  ngOnInit () {
    this.getAluno = this.aluno.getAllAluno()
  }

}
