import { Component, OnInit } from '@angular/core';
import { filmList } from '../data/mock-film-list';

@Component({
  selector: 'app-movie2',
  templateUrl: './movie2.component.html',
  styleUrls: ['./movie2.component.css']
})
export class Movie2Component implements OnInit {

  movies : any[] | undefined 

  constructor() { }

  ngOnInit(): void {
    this.movies = filmList
  }

}
