import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao-usuarios',
  templateUrl: './cadastro-edicao.component.html',
  styleUrls: ['./cadastro-edicao.component.css']
})
export class CadastroEdicaoUsuarios {
  constructor(private usuarioService : UsuariosService, private router: Router, private route: ActivatedRoute){}

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    idade: new FormControl()
  });

  id: string = '0';

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    try {
      
      if(id != null)
      {
        this.id = id;
        this.usuarioService.buscarUsuarioPorId(id).subscribe(usuario => {
          this.usuarioForm.patchValue({
          nome: usuario.nome,
          idade: usuario.idade
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  cadastrarEditarUsuarios(){
    const usuario : IUsuario = this.usuarioForm.value as IUsuario;
    usuario.ativo = true;

    if(this.id != '0'){
      usuario.id = this.id;
    }

    this.usuarioService.cadastrarEditarUsuarios(usuario).subscribe(
    (result) => {
      Swal.fire({
        title: "Sucesso!",
        text: `Usuário ${this.id != '0' ? "atualizado" : "cadastrado"} com sucesso!`,
        icon: "success"
      });
    }, 
    (erro) => {
      console.error(erro);
    })

    this.router.navigateByUrl('/usuarios');
  }
}
