import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  form:FormGroup;

  constructor( public rest:UserService, private fb:FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    }); 
  }

  ngOnInit() {
  }

  loginUser() {
    const val = this.form.value;
    if (val.email && val.password) {
      this.rest.login(val.email, val.password)
      .subscribe(() => {
        console.log("User is logged in");
        this.router.navigateByUrl('/');
      });
    }
  }

}
