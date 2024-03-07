import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/produtos';

  buscarTodosProdutos(){
    return this.http.get<IProduto[]>(this.api);
  }
  
  buscarProdutoPorId(id: string){
    return this.http.get<IProduto>(`${this.api}/${id}`);
  }

  cadastrarEditarProduto(produto : IProduto){
    if(produto.id != null)
    {
      return this.http.put(`${this.api}/${produto.id}`, produto);
    }
    return this.http.post(this.api, produto);
  }

  removerProduto(id: string){
    return this.http.delete(`${this.api}/${id}`)
  }
}
