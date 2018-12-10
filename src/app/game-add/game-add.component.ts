import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})

export class GameAddComponent implements OnInit {

  @Input() gameData = { name: '', genres: [], description: "", price: 0, reviews: [], released: Number, characters: [], developer: "", imageUrl: "" };

  constructor( public rest:GameService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
  }

  addGame() {
    this.rest.addGame(this.gameData).subscribe((result) => {
      this.router.navigate(['/game-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
