import { Component, OnInit } from '@angular/core';
import * as actions from './redux/ToDo.actions';
import { Store } from '@ngrx/store';
import { ToDo } from './redux/model/ToDo.model';
import { TareaService } from './services/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ToDOV2';

  constructor( private store: Store<ToDo>, private tareaService: TareaService){
  }

   ngOnInit(): void{

    this.tareaService.obtenerTodos().subscribe((todos: any) => {
      todos.data.forEach((todo: any) => {
        this.store.dispatch(actions.enviar({...todo}))
      })
    })

     const bd: ToDo[] = localStorage.getItem("tasklist")? JSON.parse(localStorage.getItem("tasklist")!) : [];

    bd.forEach(bd => {

      this.store.dispatch( actions.enviar({...bd}) )

    })
  }
}
