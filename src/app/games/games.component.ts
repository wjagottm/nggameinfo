import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games:any = [];
  displayedColumns: string[] = ['image', 'name', 'developer', 'released', 'details', 'edit', 'delete'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(public rest:GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.games = [];
    this.rest.getGames().subscribe((data: {}) => {
      console.log(data);
      this.isLoadingResults = false;
      this.games = data;
    });
  }

  add() {
    this.router.navigate(['/game-add']);
  }

  detail(id) {
    this.router.navigate(['/game-details/' + id]);
  }

  edit(id) {
    this.router.navigate(['/game-edit/' + id]);
  }

  delete(id) {
    this.rest.deleteGame(id)
      .subscribe(res => {
        this.isLoadingResults = true;
        this.getGames();
      }, (err) => {
        console.log(err);
      }
      );
  }

}
