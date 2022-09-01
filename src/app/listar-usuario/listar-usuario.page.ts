import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.page.html',
  styleUrls: ['./listar-usuario.page.scss'],
})
export class ListarUsuarioPage implements OnInit {

  listadoUsuarios = [
    {
      nombre: 'Juan',
      edad: 29,
      Profesion: 'Ing. Sistemas',
      Hobby: 'Futbol',
      img : 'assets/icon/favicon.png'
  },
  {
      nombre: 'Pedro',
      edad: 30,
      Profesion: 'Ing. Sistemas',
      Hobby: 'Futbol'
  },
  {
      nombre: 'Maria',
      edad: 25,
      Profesion: 'Ing. Sistemas',
      Hobby: 'Futbol'
  }
]

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  verUsuario(nombre: String) {
    let url = `usuario/${nombre}`;

    this.router.navigate([url])
  }

}
