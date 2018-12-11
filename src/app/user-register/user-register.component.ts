import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  form:FormGroup;

  constructor( public rest:UserService, private fb:FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.form = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    }); 
}

  ngOnInit() {
  }

  registerUser() {
    this.rest.register(this.form.value).subscribe((result) => {
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    });
  }
}
