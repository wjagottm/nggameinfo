import { Component, OnInit, Input } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.css']
})
export class DeveloperEditComponent implements OnInit {

  @Input() devData:any = { name: '', country: '', est: new Date(), logoUrl: ''};

  constructor(public rest:DeveloperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getDeveloper(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.devData = data;
    });
  }

  updateDeveloper() {
    this.rest.updateDeveloper(this.route.snapshot.params['id'], this.devData).subscribe((result) => {
      this.router.navigate(['/developer-details/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
