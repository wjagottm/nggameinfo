import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  characters: any = [];
  username: any;
  displayedColumns: string[] = ['image', 'name', 'game', 'details', 'edit', 'delete'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(public rest:CharacterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCharacters();
    this.username = localStorage.getItem('username')
  }

  getCharacters() {
    this.characters = [];
    this.rest.getCharacters().subscribe((data: {}) => {
      console.log(data);
      this.isLoadingResults = false;
      this.characters = data;
    });
  }

  add() {
    this.router.navigate(['/character-add']);
  }

  detail(id) {
    this.router.navigate(['/character-details/' + id]);
  }

  edit(id) {
    this.router.navigate(['/character-edit/' + id]);
  }

  delete(id) {
    this.rest.deleteCharacter(id)
      .subscribe(res => {
        this.isLoadingResults = true;
        this.getCharacters();
      }, (err) => {
        console.log(err);
      }
      );
  }

}
