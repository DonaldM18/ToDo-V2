import { createAction, props } from "@ngrx/store";


export const enviar = createAction('[BD] Enviar informacion',
props<{nombre: string, accion: string, responsable: string, duracion: string, estado: string }>()
);

export const eliminar = createAction('[BD] Eliminar informacion',
props<{id:number}>()
);

export const editar = createAction('[BD] Editar informacion',
props<{id:number, nombre: string, accion: string, responsable: string, duracion: string, estado: string }>()
);