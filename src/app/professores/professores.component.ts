import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {


  public titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
  {id: 1, nome :'Roberto' , disciplina: 'Matemática'},
  {id: 2, nome :'Sérgio' , disciplina: 'Física'},
  {id: 3, nome :'Junior' , disciplina: 'Português'},
  {id: 4, nome :'Montana' , disciplina: 'Inglês'},
  {id: 5, nome :'Tereza' , disciplina: 'Biologia'}

  ];

  voltar(){

    this.professorSelecionado = null;

   }

   professorSelect(professor: Professor){
      this.professorSelecionado = professor;
   }


  constructor() { }

  ngOnInit() {
  }

}
