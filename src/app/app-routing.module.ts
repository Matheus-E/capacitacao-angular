import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ListagemUsuariosComponent } from "./pages/usuario/listagem/listagem.component";
import { ListagemProdutosComponent } from "./pages/produtos/listagem/listagem.component";
import { CadastroEdicaoProdutos } from "./pages/produtos/cadastro-edicao/cadastro-edicao.component";
import { CadastroEdicaoUsuarios } from "./pages/usuario/cadastro-edicao/cadastro-edicao.component";
import { UsuarioGuard } from "./guards/usuario.guard";

const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'usuarios', component: ListagemUsuariosComponent},
    {path: 'usuarios/cadastrar', component: CadastroEdicaoUsuarios, canActivate: [UsuarioGuard]},
    {path: 'usuarios/editar/:id', component: CadastroEdicaoUsuarios, canActivate: [UsuarioGuard]},
    {path: 'produtos', component: ListagemProdutosComponent},
    {path: 'produtos/cadastrar', component: CadastroEdicaoProdutos},  
    {path: 'produtos/editar/:id', component: CadastroEdicaoProdutos}  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}