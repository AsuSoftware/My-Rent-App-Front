import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isAddress = false;

  profileForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    birthday: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
    address: this.fb.group({
      city: [null, Validators.required],
      country: [null, Validators.required],
      zip: [null, Validators.required],
      streetNumber: [null, Validators.required]
    })
  });

  public constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
  }

  public getAddressForm(): void {
    if(this.profileForm.get('firstName').valid &&
     this.profileForm.get('lastName').valid &&
     this.profileForm.get('email').valid &&
     this.profileForm.get('birthday').valid &&
     this.profileForm.get('phone').valid &&
     this.profileForm.get('password').valid
     ) {
       this.isAddress = true;
     }
  }

  public onRegister(): void {
    if(this.profileForm.valid) {
      // send to the server
    }
  }

}
