import { Component, OnInit } from '@angular/core';
import {JokePublisherService} from "../../services/joke-publisher.service";
import {Joke} from "../../shared/models/joke";
import {SavedJokesService} from "../../services/saved-jokes.service";

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {

  jokesToShow: Joke[] = [];
  acceptedJokes: Joke[] = [];

  constructor(private jokePublisherService: JokePublisherService,
              private savedJokesService: SavedJokesService) {
    this.acceptedJokes = savedJokesService.getJokes();
  }

  ngOnInit(): void {
    this.jokePublisherService.listenForJokes().subscribe((joke) => {
      this.jokesToShow.push(joke);
    });
    this.jokePublisherService.deletePastValues();
  }

  deleteJoke(index: number) {
    this.jokesToShow.splice(index, 1);
  }

  acceptJoke(index: number) {
    let joke = this.jokesToShow[index];
    this.acceptedJokes.push(joke);
    this.savedJokesService.saveJoke(joke);
    this.deleteJoke(index);
  }
}
