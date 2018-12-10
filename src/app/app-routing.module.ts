import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent} from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { CharactersComponent} from './characters/characters.component';
import { DevelopersComponent } from './developers/developers.component';

import { GameDetailComponent } from './game-detail/game-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';

import { GameAddComponent } from './game-add/game-add.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { DeveloperAddComponent } from './developer-add/developer-add.component';

import { GameEditComponent } from './game-edit/game-edit.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-add', component: GameAddComponent},
  { path: 'character-add', component: CharacterAddComponent},
  { path: 'developer-add', component: DeveloperAddComponent},
  { path: 'game-edit/:id', component: GameEditComponent},
  { path: 'character-edit/:id', component: CharacterEditComponent},
  { path: 'developer-edit/:id', component: DeveloperEditComponent},
  { path: 'games', component: GamesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'game-details/:id', component: GameDetailComponent},
  { path: 'character-details/:id', component: CharacterDetailComponent},
  { path: 'developer-details/:id', component: DeveloperDetailComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
