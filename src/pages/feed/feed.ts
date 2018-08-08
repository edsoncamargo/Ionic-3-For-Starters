import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from './../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})

export class FeedPage {

  public feed = { // JSON 
    title: "Edson Camargo",
    description: "The Santos Futebol Clube is very bad, but I believe that Santos can win!"
  }
  public contLikes: number = 0;
  public currentDate: any;

  public listMovies = new Array<any>();
  public urlMovie = "https://image.tmdb.org/t/p/w500/";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mp: MovieProvider) {
    this.currentDate = Date();
  }

  buttonLikes() {
    this.contLikes += 1;
  }

  ionViewDidLoad() {
    this.mp.getPopularMovies().subscribe(data => { // getLatestMovies é do tipo observable, ou seja, ele observa um retorno, então ele não vai passar sem ter uma resposta.
      const response = (data as any); // O response (data no console log), não tem o _body, mas se fizermos um type cast de any, ele vai ter.
      const resolve = JSON.parse(response._body); // 'JSON.parse', vai pegar esse valor (que será texto) e transformar em um objeto JSON.
      this.listMovies = resolve.results; // O atributo 'results' é a lista de filmes.
    }, error => {
      console.log(error);
    })
  }

}
