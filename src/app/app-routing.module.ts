import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent} from './characters/characters.component';
import { DevelopersComponent } from './developers/developers.component';

import { GameDetailComponent } from './game-detail/game-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game/detail/:id', component: GameDetailComponent},
  { path: 'character/detail/:id', component: CharacterDetailComponent},
  { path: 'developer/detail/:id', component: DeveloperDetailComponent},
  { path: 'games', component: GamesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'developers', component: DevelopersComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
