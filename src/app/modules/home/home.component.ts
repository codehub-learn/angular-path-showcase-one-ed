import { Component, OnInit } from '@angular/core';
import {JokeApiService} from "../../services/http/joke-api.service";
import {Joke} from "../../shared/models/joke";
import {JokePublisherService} from "../../services/joke-publisher.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jokeFromApi!: Joke;

  constructor(private jokeApiService: JokeApiService,
              private jokePublisherService: JokePublisherService) {
    this.jokeFromApi = new Joke("", "", "");
  }

  ngOnInit(): void {
    this.getNewJoke();
  }

  getNewJoke() {
    this.jokeApiService.getJoke().subscribe((joke) => this.jokeFromApi = joke);
  }

  submitJoke() {
    this.jokePublisherService.publishJoke(this.jokeFromApi);
    this.getNewJoke();
  }
}
