import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Flashcard } from '../../models/flashcard.model'





@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.css']
})
export class ViewCardsComponent {

  // TODO - eventually replace this static data with data from an API
  //  (at the time that I have API data, I'll probably be using createDeckModel() )
  flashcards: Flashcard[] = [
    {
      sideOne: "Capital of France?",
      sideTwo: "Paris"
    },
    {
      sideOne: "Capital of America?",
      sideTwo: "D.C."
    },
    {
      sideOne: "Capital of Spain?",
      sideTwo: "Madrid"
    }
  ];

  constructor(private dialog: MatDialog) {}

}
