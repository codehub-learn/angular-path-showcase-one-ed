import { Injectable } from '@angular/core';
import {Joke} from "../shared/models/joke";

@Injectable({
  providedIn: 'root'
})
export class SavedJokesService {

  savedJokes: Joke[] = []

  constructor() {}

  saveJoke(joke: Joke){
    this.savedJokes.push(joke);
    let arrayAsStr = JSON.stringify(this.savedJokes);
    localStorage.setItem("jokesArray", arrayAsStr);
  }

  getJokes(){
    let arrayAsStr = localStorage.getItem("jokesArray");
    if (arrayAsStr){
      let arrayToBeReturned: Joke[] = [];
      let parsedArray = JSON.parse(arrayAsStr);
      parsedArray.forEach((parsedJoke:any) => arrayToBeReturned.push(new Joke(parsedJoke._text, parsedJoke._category, parsedJoke._type)));
      return arrayToBeReturned;
    } else {
      return [];
    }
  }
}
