import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class MovieProvider {

  private url = "https://api.themoviedb.org/3/"
  private apiKey = "?api_key=ac2e8d16997b443c23bf98dbfcfecf90" // Query String - Sabendo que depois do '?', a url acabou, sendo continuada por parâmetros (atributo e valor, separadas pelo '=').

  constructor(public http: Http) { }

  getPopularMovies() {
    return this.http.get(this.url + "movie/popular" + this.apiKey);
  }

}
