import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  @Input() gameData:any = { name: '', genres: [], description: "", price: 0, released: Number, developer: "", imageUrl: "" };

  constructor(public rest:GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getGame(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.gameData = data;
    });
  }

  updateGame() {
    this.rest.updateGame(this.route.snapshot.params['id'], this.gameData).subscribe((result) => {
      this.router.navigate(['/game-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
