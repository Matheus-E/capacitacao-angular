import { LOCALE_ID, NgModule } from '@angular/core';
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
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskDirective, CurrencyMaskModule } from 'ng2-currency-mask';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

export const customCurrencyMaskConfig : CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision:  2,
  prefix: 'R$',
  suffix: '',
  thousands: '.'

}

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
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: CURRENCY_MASK_CONFIG, useValue: customCurrencyMaskConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
