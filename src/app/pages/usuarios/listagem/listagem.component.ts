import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title/page-title.component";

@Component({
    selector: 'app-usuarioslistagem',
    standalone: true,
    templateUrl: './listagem.component.html',
    styleUrl: './listagem.component.css',
    imports: [PageTitleComponent]
})
export class ListagemUsuariosComponent {
  //tituloDaPagina: string = "Usuários";
}
