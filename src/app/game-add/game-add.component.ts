import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})

export class GameAddComponent implements OnInit {

  @Input() gameData = { name: '', genres: [], description: "", price: 0, reviews: [], released: Number, characters: [], developer: "", imageUrl: "" };

  developers:any = [];

  constructor( public devRest:DeveloperService, public rest:GameService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.getDevelopers();
  }

  addGame() {
    this.rest.addGame(this.gameData).subscribe((result) => {
      this.addGameToDev(this.gameData.developer, result);
      this.router.navigate(['/game-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

  getDevelopers() {
    this.developers = [];
    this.devRest.getDevelopers().subscribe((data: {}) => {
      console.log(data);
      this.developers = data;
    });
  }

  addGameToDev(devId, game) {
    this.devRest.addGameToDev(devId, game).subscribe((result) => {
      console.log("added game to dev w/ id=" + devId)
    }, (err) => {
      console.log(err);
    });
  }

  
}
