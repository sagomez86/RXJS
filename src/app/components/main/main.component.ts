import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  cursosPromise!: Curso[];
  cursosObservable$!: Observable<Curso[]>;
  
  
  constructor(private cursoService: CursoService) { 

    cursoService.getCursosPromise().then((valor:Curso[]) => {
      this.cursosPromise = valor;
    }).catch((error:any)=>{
      console.error(error)
    })


    this.cursosObservable$ = cursoService.getCursosObservable();
    
  };

  ngOnInit(): void {
  };
  

}
