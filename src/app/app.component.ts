// Tom Smolarek 1801495

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // this part is creating the titles in the side
  // menu with the connection to the pages an the icons
  public appPage = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Targeted CV',
      url: '/targeted',
      icon: 'document'
    },
    {
      title: 'Project Work',
      url: '/project',
      icon: 'document'
    },
    {
      title: 'Extra Curriculum activities',
      url: '/extra',
      icon: 'document'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
