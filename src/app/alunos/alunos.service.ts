import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
// import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private adminPanel: LoginService) { }

  getAllAluno () {
    console.log('chamei')
    return [
      { id:1 ,
        nome:'gustavo',
        status:'to zuado',
        telefone:'19919'
      },
      {
        id:2 ,
         nome:'sandro',
         status:'feliz',
         telefone:'13213'},
      {
        id:3 ,
         nome:'bete',
         status:'ocupado',
         telefone:'87089907'},
      {
        id:4 ,
        nome:'esther',
        status:'realizado',
        telefone:'1247243512'},
    ]
  }
  getDetailAluno (id:number) {
     let detail = this.getAllAluno()
     for (const details of detail) {
       if(details.id == id){
          return details
       }
     }
     return null
  }
  getAdminPanel ():any {
    if(this.adminPanel.adminpanel()){
      return [
        { id:1 ,
          nome:'gustavo',
          pagamento:'realizado',
          valor:'45,90'
        },
        {
          id:2 ,
           nome:'sandro',
           pagamento:'pendente',
           valor:'20,90'},
        {
          id:3 ,
           nome:'bete',
           pagamento:'realizado',
           valor:'30,50'},
        {
          id:4 ,
          nome:'esther',
          pagamento:'pendente',
          valor:'20,00'
        },
      ]
    }else{
      return false
    }
  }
}
