import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from './../../providers/movie/movie';

@IonicPage()

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})

export class MovieDetailsPage {

  private movie;
  private movieDetails: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mp: MovieProvider) {
    this.movieDetails = navParams.get('id');
    console.log(this.movieDetails);
  }

  ionViewDidLoad() { this.getMovie(); }

  getMovie() {
    this.mp.getMovieDetails(this.movieDetails).subscribe(data => {
      let resolve = (data as any)._body;
      this.movie = JSON.parse(resolve);
      console.log(this.movie);
    }, (error) => {
      console.log(error);
    });
  }

}