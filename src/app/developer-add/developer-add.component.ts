import { Component, OnInit, Input} from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developer-add',
  templateUrl: './developer-add.component.html',
  styleUrls: ['./developer-add.component.css']
})
export class DeveloperAddComponent implements OnInit {

  @Input() devData = { name: '', country: '', est: new Date(), games: [], logoUrl: ''};

  constructor(public rest:DeveloperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addDeveloper() {
    this.rest.addDeveloper(this.devData).subscribe((result) => {
      this.router.navigate(['/developer-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
