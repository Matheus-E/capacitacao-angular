import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListagemUsuariosComponent } from './pages/usuario/listagem/listagem.component';
import { CadastroEdicaoUsuarios } from './pages/usuario/cadastro-edicao/cadastro-edicao.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CadastroEdicaoProdutos } from './pages/produtos/cadastro-edicao/cadastro-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListagemUsuariosComponent,
    ListagemProdutosComponent,
    CadastroEdicaoUsuarios,
    HomeComponent,
    PageTitleComponent,
    CadastroEdicaoProdutos
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
