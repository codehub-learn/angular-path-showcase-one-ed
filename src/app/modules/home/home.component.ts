import { Component, OnInit } from '@angular/core';
import {JokeApiService} from "../../services/http/joke-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jokeApiService: JokeApiService) { }

  ngOnInit(): void {
    this.jokeApiService.getJoke().subscribe((joke) =>{
      console.log(joke);
    });
  }

}
