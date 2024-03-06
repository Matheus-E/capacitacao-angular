import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemProdutosComponent {
  //tituloPagina: string = 'Produtos';
  lstProdutos: IProduto[] = [];

  constructor(private produtosService: ProdutosService){}

  ngOnInit(){
    this.produtosService.buscarTodosProdutos().subscribe(produtos => {
      this.lstProdutos = produtos;
    }, error => {
      console.error(error);
    });
  }

  removerProduto(id: number){
    if (id != undefined) 
    {
      this.exibirConfirmacao(id);  
    }
  }
    
  exibirConfirmacao(id: number){
    Swal.fire({
      title: "Confirmar exclusão",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtosService.removerProduto(id).subscribe(result => {

          this.lstProdutos = this.lstProdutos.filter(item => item.id != id);

          Swal.fire({
            title: "Removido!",
            text: "O produto foi removido com sucesso.",
            icon: "success"
          });
        }, erro => {
          console.error(erro);
        });
      }
    });
  }
}
