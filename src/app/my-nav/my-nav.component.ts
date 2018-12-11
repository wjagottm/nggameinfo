import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
})
export class MyNavComponent {

  user;
  username:any = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  ngOnInit() {
    this.checkLogin();
    this.username = localStorage.getItem('username')
  }

  constructor(private rest: UserService, private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router) {
    rest.user.subscribe(() => this.checkLogin());
  }

  logout() {
    this.rest.logout();
    this.checkLogin();
    this.router.navigate(['/']);
  }

  checkLogin() {
    if (localStorage.getItem('username') !== null) {
      this.user = true;
    } else {
      this.user = false;
    }
  }

}
