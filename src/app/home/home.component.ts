import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToDo } from '../redux/model/ToDo.model';
import * as actions from '../redux/ToDo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  edicion:boolean = false;
  tareas: ToDo[] = [];
  tareaEdicion!: number;

  EditarTarea: FormGroup = this.fb.group({
    nombre:['',[Validators.required]],
    responsable:['',[Validators.required]],
    duracion:['',[Validators.required]],
    estado:['',[Validators.required]],
    accion:['',[Validators.required]],
  })
  
  constructor(private fb:  FormBuilder, private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select('todo')
    .subscribe((tareas) => 
        this.tareas = tareas
      );
  }

  editar(id:number){
    this.edicion = true;
    this.tareaEdicion = id;
  }
  cerrar(){
    this.edicion = false;
  }

  eliminar(id:number){
    this.store.dispatch(actions.eliminar({id}) )
  }

  guardarCambios(id:number){
    console.log(id)
    console.log(this.EditarTarea.value)
    this.edicion= true;
    this.store.dispatch(actions.editar({id, ...this.EditarTarea.value}))

  }
}
