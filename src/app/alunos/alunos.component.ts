import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { AlunosService } from './alunos.service'
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  getAluno:any[] = []
  payments:any[] =[]
  office:string = ""
  adminpanel:boolean = false

  constructor(
    private aluno: AlunosService,
    private getOffice: LoginService
  ) { }

  ngOnInit () {
    this.office = this.getOffice.officeprefer()
    if(this.aluno.getAdminPanel()){
      this.payments = this.aluno.getAdminPanel()
    }else{
      this.adminpanel = true
      this.getAluno = this.aluno.getAllAluno()
    }
  }
}
