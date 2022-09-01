import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  nombre = '';

  constructor(
    private activeRuta: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.nombre = this.activeRuta.snapshot.paramMap.get('nombre');
  }

}
