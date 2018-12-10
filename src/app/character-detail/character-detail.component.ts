import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character:any;

  constructor(public rest:CharacterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCharacter(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.character = data;
    });
  }

  editChar(id) {
    this.router.navigate(['/character-edit/' + id]);
  }

}
