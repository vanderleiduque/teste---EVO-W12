import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public dadosFormulario: any;
  public controlaConteudo: boolean = true;
  
  
  enviarFormulario() {
    const formulario = document.getElementById("formulario");               /* --- Enviar dados para o LocalStorage */
    
    let forms = {
      nome: formulario[0].value, 
      email: formulario[1].value,
    }
  
    localStorage.setItem('dadosFormulario', JSON.stringify(forms));
  
    this.obterDadosLocalStorage();
  
  
    
    let email =  formulario[1].value                                        /* <--- Validação de Email ---  */
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  
    if (reg.test(email))
    {
      this.controlaConteudo = false; 
    } 
    else 
    {
        alert( email + "  NÃO é um E-mail válido!");
  
        formulario.addEventListener("submit", (evento) => {                 /* <-- Para  pagina não carregar e apagar os campos ja preenchidos -- */
          evento.preventDefault()
        })
    }
    
  }
  
  obterDadosLocalStorage() {
    let dados = localStorage.getItem('dadosFormulario');                  /* --- Obter dados do LocalStorage (getItem) */
    this.dadosFormulario = JSON.parse(dados);                             
  }
  
  botaoVoltar() {
    this.controlaConteudo = true;
  }
  
}
