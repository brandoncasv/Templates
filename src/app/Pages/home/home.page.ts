import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

<<<<<<< HEAD:src/app/home/home.page.ts
  getText(data) {
    console.log(data.detail.value);
=======
  getData(event) {
    console.log(event.detail.value);
>>>>>>> f0c9e10c738a3fc9f6f0bf8f76a0348a78206c2e:src/app/Pages/home/home.page.ts
  }
}
