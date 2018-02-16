 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie";
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
      MovieProvider
  ]
})
export class FeedPage {
  public nomeUsuario:string = "Junin GamePlay33";
  public qtdLike=0;
  public loader;
  public refresher;
  public carregando;
  public page = 1;
  public scroll;

  
  public objeto_feed={
      titulo:"Lyan Martins",
      data:"12 de novembro de 1995",
      descricao:"alo romario!",
      qtdLike:12,
      qtsComments:4,
      timeComments:"11h ago"
  }
  


  public listaFilmes = new Array<any>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MovieProvider,
              public loadingCtrl: LoadingController) {
  }

  abrirCarregar() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }
  fechaCarregar(){
    this.loader.dismiss();
  }
  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage, {id : filme.id});
  }
  carrega(refresher) {
    this.refresher = refresher;
    this.carregando = true;
    this.carregarFilmes();
  }  
  public somaDoisNumeros(num1:number,num2:number): void{
  	alert(num1+num2);
  }
  
  ionViewDidEnter() {
    this.carregarFilmes();
 
  }
  doInfinite(infiniteScroll) {
    this.page++;
    console.log(this.page);    
    this.scroll = infiniteScroll;
    this.carregarFilmes(true);
    //infiniteScroll.complete();
  }
  carregarFilmes(novaPagina: boolean = false){
    this.abrirCarregar();
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10,20);
    if(!novaPagina){
      console.log("nao e pagina nova")
      this.page = 1;
    }
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
        const response = (data as any);
        //const objetoRetorno = JSON.parse(response);
        if(novaPagina){
          this.listaFilmes = this.listaFilmes.concat(response.results);
          console.log(this.listaFilmes);
          console.log(this.page);
          this.scroll.complete();
        }else{
          this.listaFilmes = response.results;
          console.log(this.page);
        }
       
      console.log(response);
      this.fechaCarregar();
      if(this.carregando){
        this.refresher.complete();
        this.carregando = false;
      }
    }, error =>{
      console.log(error);
      this.fechaCarregar();
      if(this.carregando){
        this.refresher.complete();
        this.carregando = false;
      }
    });
  }

}
