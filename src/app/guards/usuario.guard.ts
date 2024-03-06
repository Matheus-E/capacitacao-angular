import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const UsuarioGuard: CanActivateFn = (route, state) => {
  const perfil: string = "Admin";

  if(perfil != "Admin"){
    Swal.fire("Permissão negada!", "Você não tem permissão pra acessar essa pagina.", "error")
    inject(Router).navigateByUrl('/usuario');
    return false;
  }

  return true;
};
