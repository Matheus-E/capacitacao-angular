import { Component } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemUsuariosComponent {
  lstUsuarios: IUsuario[] = [];
  
  constructor(private usuariosService: UsuariosService){}

  ngOnInit(){
    this.usuariosService.buscarTodosUsuarios().subscribe(usuarios => {
      this.lstUsuarios = usuarios;
    }, error => {
      console.error(error);
    });
  }

  removerUsuario(id: string){
    if(id != undefined)
    {
      this.exibirConfirmacao(id);     
    }
  }

  exibirConfirmacao(id: string){
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
        this.usuariosService.removerUsuario(id).subscribe(result => {

          this.lstUsuarios = this.lstUsuarios.filter(item => item.id != id);

          Swal.fire({
            title: "Removido!",
            text: "O usuário foi removido com sucesso.",
            icon: "success"
          });
        }, erro => {
          console.error(erro);
        });
      }
    });
  }
}
