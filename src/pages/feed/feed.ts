import { MovieDetailsPage } from './../movie-details/movie-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

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
  public currentDate: any;

  public listMovies = new Array<any>();

  public loading: any;
  public refresher: any;
  public isRefreshing: boolean = false;

  public page: number = 1;

  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mp: MovieProvider,
    public lc: LoadingController) {
    this.currentDate = Date();
  }

  ionViewDidEnter() { this.loadingMovies(); } // Chama a função de carregar filmes, toda vez que essa página for executada.

  loadingMovies(newPage: boolean = false) {
    this.presentLoading();
    this.mp.getPopularMovies(this.page).subscribe(data => { // getLatestMovies é do tipo observable, ou seja, ele observa um retorno, então ele não vai passar sem ter uma resposta.
      const response = (data as any); // O response (data no console log), não tem o _body, mas se fizermos um type cast de any, ele vai ter.
      const resolve = JSON.parse(response._body); // 'JSON.parse', vai pegar esse valor (que será texto) e transformar em um objeto JSON.
      if (newPage) {
        this.listMovies = this.listMovies.concat(resolve.results); // A lista filmes receberá ela mesmo, mais o retorno concatenado, para não perder a lista anterior e sim adicionar.
        this.infiniteScroll.complete();
      } else {
        this.listMovies = resolve.results; // O atributo 'results' é a lista de filmes.
      }
      this.dismissLoading();  // Removendo o body.
      if (this.isRefreshing) { // Verificando se o refresh foi acionado.
        this.refresher.complete(); // O refresh está completo, pois é executado depois da lista de filmes atualizar.
        this.isRefreshing = false; // Atribuindo false na váriavel booleana de controle (para reiniciar).
      }
    }, (error) => {
      this.dismissLoading();
      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
      console.log(error);
    });
  }

  presentLoading() { // Função do LoadingController que cria o componente de loading.
    this.loading = this.lc.create({ // Criando o body.
      content: 'Loading...'
    });
    this.loading.present(); // Mostrando o body.
  }

  dismissLoading() { // Função do LoadingController que remove o componente de loading.
    this.loading.dismiss(); // Removendo o body.
  }

  doRefresh(refresher) {
    this.refresher = refresher; // Obtendo o evento dessa função (api) no html e atribuindo para uma váriavel global.
    this.isRefreshing = true; // Utilizando uma váriavel booleana, para saber se a função de refresh foi acionada.
    this.loadingMovies(); // Chamando a função de carregar a lista de filmes, para dar refresh.
  }

  getMovieDetails(movie) {
    this.navCtrl.push(MovieDetailsPage, { id: movie.id });
  }

  doInfinite(infiniteScroll) {
    this.page += 1;
    this.infiniteScroll = infiniteScroll;
    this.loadingMovies(true);
  }

}
