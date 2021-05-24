import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAllAluno () {
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
}
