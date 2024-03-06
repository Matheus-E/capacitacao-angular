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

  buscarUsuarioPorId(id: number){
    return this.http.get<IUsuario>(`${this.api}/${id}`);
  }

  cadastrarEditarUsuarios(usuario : IUsuario){
    const idNumber = Number(usuario.id);
    if(idNumber)
    {
        return this.http.put(`${this.api}/${usuario.id}`, usuario);
    }
    return this.http.post(this.api, usuario);
  }
  removerUsuario(id: number){
    return this.http.delete(`${this.api}/${id}`)
  }
}
