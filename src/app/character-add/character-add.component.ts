import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent implements OnInit {

  constructor(public gameRest:GameService, public rest:CharacterService, private route: ActivatedRoute, private router: Router) { }

  games:any;

  @Input() characterData = { name: '', description: '', weapons: [], abilities: [], game: '', imageUrl: ''}

  ngOnInit() {
    this.getGames();
  }
  
  addCharacter() {
    this.rest.addCharacter(this.characterData).subscribe((result) => {
      this.addCharToGame(this.characterData.game, result);
      this.router.navigate(['/character-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

  getGames() {
    this.games = [];
    this.gameRest.getGames().subscribe((data: {}) => {
      console.log(data);
      this.games = data;
    });
  }

  addCharToGame(gameId, char) {
    this.gameRest.addCharToGame(gameId, char).subscribe((result) => {
      console.log("added character to game w/ id=" + gameId)
    }, (err) => {
      console.log(err);
    });
  }

}
