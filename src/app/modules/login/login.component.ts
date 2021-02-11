import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });

  public constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ) { }

  public ngOnInit(): void {
  }

  public onLogin(): void {
    if(this.profileForm.valid) {
      // send to server
      console.log(this.profileForm.value);
      this.loginService.login(this.profileForm.value).subscribe(data => {
       console.log(data);
       this.router.navigate[("/vehicles")];
      }, err => console.log(err));
    }
  }

}
