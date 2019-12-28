import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Plugins, StatusBarStyle} from '@capacitor/core';
import {RegisterPage} from "./Pages/register/register.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Camara Cordova',
      url: 'camera-cordova',
      icon: 'camera',
    },
  ];
  constructor(
    private platform: Platform,

  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Light});
      if (this.platform.is('android')) {
        await StatusBar.setBackgroundColor({ color: '#CDCDCD'});
      }
    } catch (error) {
        console.log('This is normal in a browser', error);
    }
  }
}
