import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage} from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';


@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, configProviders: ConfigProvider) {
    platform.ready().then(() => {

      let config = configProviders.getConfigData();
      console.log(config);
      //let cvt = JSON.parse(config.toString());
      //console.log(cvt.showSlide);
      if(config == null){
        this.rootPage = IntroPage;
        configProviders.setConfigData(false,"Lyan");
      }else{
        this.rootPage = TabsPage;
        console.log("entrou")
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
