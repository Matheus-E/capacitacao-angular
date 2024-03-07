import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao',
  templateUrl: './cadastro-edicao.component.html',
  styleUrls: ['./cadastro-edicao.component.css']
})
export class CadastroEdicaoProdutos {
  constructor(private produtoService: ProdutosService, private router: Router, private route: ActivatedRoute){}

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    quantidade: new FormControl(0, Validators.required),
    preco: new FormControl(0, Validators.required)
  });

  id: string = '0';

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    try {
      if(id != null)
      {
        this.id = id;
        this.produtoService.buscarProdutoPorId(id).subscribe(produto => {
          console.log(produto);
          this.produtoForm.patchValue({
            nome: produto.nome,
            codigoBarras: produto.codigoBarras,
            quantidade: produto.quantidade,
            preco: produto.preco
          })
        });

      }
    } catch (error) {
      console.error(error);
    }
  }

  cadastrarEditarProduto(){
    const produto : IProduto = this.produtoForm.value as IProduto;
    
    if (this.id != '0') {
      produto.id = this.id;
    }

    this.produtoService.cadastrarEditarProduto(produto).subscribe(
      (result) => {
        Swal.fire({
          title: "Sucesso!",
          text: `Produto ${this.id != '0' ? "atualizado" : "cadastrado"} com sucesso!`,
          icon: "success"
        });
      }, 
      (erro) => {
        console.error(erro);
      })
  
      this.router.navigateByUrl('/produtos');
  }
}
