import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PlayDeckComponent } from './pages/play-deck/play-deck.component';

@NgModule({
  declarations: [PlayDeckComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PlayDeckComponent]
})
export class AppModule {}
