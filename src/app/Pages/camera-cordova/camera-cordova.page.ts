import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-cordova',
  templateUrl: './camera-cordova.page.html',
  styleUrls: ['./camera-cordova.page.scss'],
})
export class CameraCordovaPage implements OnInit {

  foto: any = 'person';
  constructor() { }

  ngOnInit() {
  }

}
