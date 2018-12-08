import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { DevelopersComponent } from './developers/developers.component';
import { CharactersComponent } from './characters/characters.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DevelopersComponent,
    CharactersComponent,
    GameDetailComponent,
    CharacterDetailComponent,
    DeveloperDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
