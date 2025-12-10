import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PlayDeckComponent } from './pages/play-deck/play-deck.component';
import { ViewDecksComponent } from './pages/view-decks/view-decks.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'decks', pathMatch: 'full' },
  { path: 'decks', component: ViewDecksComponent },
  { path: 'play', component: PlayDeckComponent },
  { path: '**', redirectTo: 'decks' }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayDeckComponent,
    ViewDecksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
