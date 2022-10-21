import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { };


  listaCursos: Curso[] = [
    {
    nombre: "ReactJS",
    profesor: "Abner"
    },
    {
    nombre: "Angular",
    profesor:"Franco"
    },
    {
      nombre: "Python",
      profesor:"Lautaro"
      }
  ];


  getCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve,reject) => {
      if (this.listaCursos.length > 0){
          console.log("Curso desde Promise OK");
          resolve(this.listaCursos);
      } else{
          reject("No hay cursos para mostar")
      }
    })
  };

  getCursosObservable(){
    return of(this.listaCursos)
  };

}
