import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TagInputModule } from 'ngx-chips';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule, MatOptionModule, MatToolbarModule, MatInputModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatPaginatorModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { GamesComponent } from './games/games.component';
import { DevelopersComponent } from './developers/developers.component';
import { CharactersComponent } from './characters/characters.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameAddComponent } from './game-add/game-add.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';
import { DeveloperAddComponent } from './developer-add/developer-add.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CharacterAddComponent } from './character-add/character-add.component';

TagInputModule.withDefaults({
  tagInput: {
    placeholder: 'Add genre',
      // add here other default values for tag-input
    modelAsStrings: true
  }
});

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    GamesComponent,
    DevelopersComponent,
    CharactersComponent,
    GameDetailComponent,
    CharacterDetailComponent,
    DeveloperDetailComponent,
    DashboardComponent,
    GameEditComponent,
    GameAddComponent,
    DeveloperEditComponent,
    DeveloperAddComponent,
    CharacterEditComponent,
    CharacterAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    TagInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
