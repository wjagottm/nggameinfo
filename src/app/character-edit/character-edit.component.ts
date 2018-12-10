import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {

  @Input() characterData:any = { name: '', description: '', weapons: [], abilities: [], game: '', imageUrl: ''}

  constructor(public rest:CharacterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCharacter(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.characterData = data;
    });
  }


  updateCharacter() {
    this.rest.updateCharacter(this.route.snapshot.params['id'], this.characterData).subscribe((result) => {
      this.router.navigate(['/character-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
