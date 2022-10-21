import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  cursosPromise!: Curso[];
  cursosObservable!: Curso[];
  subscription: Subscription;
  
  constructor(private cursoService: CursoService) { 

    cursoService.getCursosPromise().then((valor:Curso[]) => {
      this.cursosPromise = valor;
    }).catch((error:any)=>{
      console.error(error)
    })

    this.subscription = cursoService.getCursosObservable().subscribe({
      next: (valor:Curso[]) =>{
        console.log("Curso desde Observable OK");
        this.cursosObservable = valor;
      },
      error:(error) =>{
        console.error(error);
      }

    })
  };

  ngOnInit(): void {
  };
  
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
