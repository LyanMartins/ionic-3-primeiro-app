import { Injectable } from '@angular/core';

let config_key = "config";

@Injectable()
export class ConfigProvider {
  private config = {
    showSlide : true,
    name:"",
    username:""
  }
  constructor() {
    
  }
  getConfigData(): any{
    return localStorage.getItem(config_key);
    
  }
  setConfigData(showSlide?: boolean,name?: string,username?:string){
    let config = {
      showSlide : true,
      name:"",
      username:""
    }
    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(username){
      config.username = username;
    }
    
    localStorage.setItem(config_key,JSON.stringify(config));
    console.log(config);
  }
}
