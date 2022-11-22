import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";
import {Joke} from "../shared/models/joke";

@Injectable({
  providedIn: 'root'
})
export class JokePublisherService {

  private jokePublisher = new ReplaySubject<Joke>();

  constructor() { }

  publishJoke(joke: Joke){ //home
    this.jokePublisher.next(joke);
  }

  listenForJokes(){ //jokes-list subscribed
    return this.jokePublisher.asObservable();
  }

  deletePastValues(){
    // reset subject
    this.jokePublisher = new ReplaySubject<Joke>();
  }
}
