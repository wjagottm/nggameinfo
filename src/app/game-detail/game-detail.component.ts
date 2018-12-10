import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game:any;

  constructor(public rest:GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getGame(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.game = data;
    });
  }

  editGame(id) {
    this.router.navigate(['/game-edit/' + id]);
  }

}
