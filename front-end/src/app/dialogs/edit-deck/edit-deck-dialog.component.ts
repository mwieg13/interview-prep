import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeckSummary } from '../../pages/view-decks/view-decks.component';


@Component({
  selector: 'edit-deck-dialog',
  templateUrl: './edit-deck-dialog.component.html',
  styleUrls: ['./edit-deck-dialog.component.css']
})
export class EditDeckDialogComponent {

  title: string;
  name: string;
  description: string;
  // data: DeckSummary;

  constructor(
    private dialogRef: MatDialogRef<EditDeckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeckSummary
  ) {
    // determine if this a new deck by checking the value of the name
    this.title = data.name.length == 0 ? "New Deck" : "Edit Deck";
    // this.title = "Test";

    this.name = data.name;
    this.description = data.description;
    this.data = data;
  }

  save() {
    this.data.name = this.name;
    this.data.description = this.description;

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
