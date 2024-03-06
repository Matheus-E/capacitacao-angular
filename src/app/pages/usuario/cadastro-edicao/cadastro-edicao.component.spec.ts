import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEdicaoUsuarios } from './cadastro-edicao.component';

describe('CadastroEdicaoComponent', () => {
  let component: CadastroEdicaoUsuarios;
  let fixture: ComponentFixture<CadastroEdicaoUsuarios>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroEdicaoUsuarios]
    });
    fixture = TestBed.createComponent(CadastroEdicaoUsuarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
