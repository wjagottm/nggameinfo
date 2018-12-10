import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {

  developer:any;

  constructor(public rest:DeveloperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getDeveloper(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.developer = data;
    });
  }

  editDev(id) {
    this.router.navigate(['/developer-edit/' + id]);
  }

}
