import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/usuarios';

  buscarTodosUsuarios(){
    return this.http.get<IUsuario[]>(this.api);
  }

  buscarUsuarioPorId(id: string){
    return this.http.get<IUsuario>(`${this.api}/${id}`);
  }

  cadastrarEditarUsuarios(usuario : IUsuario){
    if(usuario.id != null)
    {
        return this.http.put(`${this.api}/${usuario.id}`, usuario);
    }    
    return this.http.post(this.api, usuario);
  }

  removerUsuario(id: string){
    return this.http.delete(`${this.api}/${id}`)
  }
}
