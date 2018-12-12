import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  developers:any = [];
  user:any;
  displayedColumns: string[] = ['logo', 'name', 'country', 'est', 'details', 'edit', 'delete'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  
  constructor(public rest:DeveloperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDevelopers();
    this.checkLogin();
  }

  checkLogin() {
    if (localStorage.getItem('username') !== null) {
      this.user = true;
    } else {
      this.user = false;
    }
  }

  getDevelopers() {
    this.developers = [];
    this.rest.getDevelopers().subscribe((data: {}) => {
      console.log(data);
      this.isLoadingResults = false;
      this.developers = data;
    });
  }

  add() {
    this.router.navigate(['/developer-add']);
  }

  detail(id) {
    this.router.navigate(['/developer-details/' + id]);
  }

  edit(id) {
    this.router.navigate(['/developer-edit/' + id]);
  }

  delete(id) {
    this.rest.deleteDeveloper(id)
      .subscribe(res => {
        this.isLoadingResults = true;
        this.getDevelopers();
      }, (err) => {
        console.log(err);
      }
      );
  }

}
