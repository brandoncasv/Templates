import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
