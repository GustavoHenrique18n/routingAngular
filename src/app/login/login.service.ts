import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  auth:boolean = false
  adminPanel:boolean = false
  office:string = ""
  constructor (private router:Router) { }

  authUser (user:any) {
    if(user.nome == "g1" && user.senha == "12"){
      this.auth = true
      this.office = 'painel de usuario'
      this.router.navigate(['/aluno'])
    }else {
      this.auth = false
      console.log('n to autenticado')
    }
  }
  authAdmin (user:any) {
    if(user.nome == "admin123" && user.senha == "admin123"){
      this.auth = true
      this.adminPanel = true
      this.office = 'painel de admin'
      this.router.navigate(['/aluno'])
    }else {
      this.auth = false
      console.log('n to autenticado')
    }
  }
  confirmedAuth () {
    return this.auth
  }
  adminpanel () {
    return this.adminPanel
  }
  officeprefer () {
    return this.office
  }
}
