import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[
    MovieProvider
  ]
})
export class FilmeDetalhesPage {
  public filmes;
  public filmeid;
  constructor(public navCtrl: NavController, public navParams: NavParams,public movieProvider:MovieProvider) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad FilmeDetalhesPage');
    this.filmeid = this.navParams.get("id");
    console.log("filme recebido e :"+this.filmeid);
    this.movieProvider.getMoviesDetails(this.filmeid).subscribe(data =>{
        let retorno = (data as any);
        console.log(retorno);
        this.filmes = retorno;
        console.log(retorno);
    },error=>{
        console.log(error);
      })
  }

}
