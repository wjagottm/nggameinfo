import { Component, OnInit, Input} from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developer-add',
  templateUrl: './developer-add.component.html',
  styleUrls: ['./developer-add.component.css']
})
export class DeveloperAddComponent implements OnInit {

  @Input() gameData = { name: '', genres: [], description: "", price: 0, reviews: [], released: Number, characters: [], developer: "", imageUrl: "" };

  constructor(public rest:DeveloperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
