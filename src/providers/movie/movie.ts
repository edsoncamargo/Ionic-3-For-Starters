import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class MovieProvider {

  private url = "https://api.themoviedb.org/3/"
  private apiKey = "ac2e8d16997b443c23bf98dbfcfecf90" // Query String - Sabendo que depois do '?', a url acabou, sendo continuada por parâmetros (atributo e valor, separadas pelo '=').
  private urlLanguage = "&language=pt-BR";


  constructor(public http: Http) { }

  getPopularMovies(page = 1) {
    return this.http.get(this.url + "movie/popular" + `?page=${page}&api_key=` + this.apiKey + this.urlLanguage);
  }

  getMovieDetails(id) {
    return this.http.get(this.url + `movie/${id}` + "?api_key=" + this.apiKey + this.urlLanguage);
  }

}
