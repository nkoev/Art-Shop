import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(private navService: NavBarService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.navService.hide();
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this.navService.show();
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
