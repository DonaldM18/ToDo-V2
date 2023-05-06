import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../redux/ToDo.actions';
import { AppState } from '../app.reducer';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  constructor(private fb:  FormBuilder, private store: Store<AppState>){}

  MiTarea: FormGroup = this.fb.group({
    nombre:['',[Validators.required]],
    accion:['',[Validators.required]],
    responsable:['',[Validators.required]],
    duracion:['',[Validators.required]],
    estado:['',[Validators.required]],
  })


  guardar(){
    console.log(this.MiTarea.value)
    this.store.dispatch(actions.enviar( this.MiTarea.value))
  }
  
}
