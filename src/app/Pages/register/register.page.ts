import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private menus: boolean = false;
  data: Object = [
  { type: 'text',
    label: 'Nombre'},
  { type: 'correo',
    label: 'Correo'},
  { type: 'password',
    label: 'Contraseña'}];
  ingresar: Object = [
  { type: 'correo',
    label: 'Correo'},
  { type: 'password',
    label: 'Contraseña'}];
  constructor() { }

  ngOnInit() {
  }
  changeDesign(event) {
    console.log(event.detail.value);
    if (event.detail.value === 'registrar') {
      this.menus = false;
    }
    if (event.detail.value === 'ingresar') {
      this.menus = true;
    }
  }
}
