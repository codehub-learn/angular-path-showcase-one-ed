import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Joke} from "../../shared/models/joke";

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  private jokeApiUrl = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

  constructor(private http: HttpClient) {}

  getJoke(): Observable<Joke>{
    return this.http.get<any>(this.jokeApiUrl).pipe(
      map((response) => {
        return new Joke(response.joke, response.category, response.type);
      }));
  }


}
