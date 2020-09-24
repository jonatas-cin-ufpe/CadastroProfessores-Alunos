import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunoSelecionado: Aluno;

  public alunos = [
    { id: 1, nome :'Marta', sobrenome: 'Luiza', telefone: 3212255},
    { id: 2, nome :'Laura', sobrenome: 'Martins', telefone: 4332255},
    { id: 3, nome :'Pedro', sobrenome: 'Suares', telefone: 6332255},
    { id: 4, nome :'Luiza', sobrenome: 'Sergio', telefone: 9332255},
    { id: 5, nome :'Lucas', sobrenome: 'Kaio', telefone: 2332255},
    { id: 6, nome :'Paula', sobrenome: 'Costa', telefone: 1332255},
    { id: 7, nome :'Paulo', sobrenome: 'Luiz', telefone: 8332255}
     ];

     voltar(){

      this.alunoSelecionado = null;

     }

     alunoSelect(aluno: Aluno){
        this.alunoSelecionado = aluno;
     }



  constructor() { }

  ngOnInit() {
  }

}
