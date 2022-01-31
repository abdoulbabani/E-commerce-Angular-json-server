import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  statut: boolean = false;
  paramRoute!: any;
  baba!: string | null;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramRoute = this._activatedRoute.snapshot.routeConfig?.path;
    if (this.paramRoute === 'register') {
      document.getElementById('signup')?.click();
    }
  }

  toggleSignUp() {
    this.status = !this.status;
  }

  // login authentication
  formLogin = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  Login() {
    console.log('les donnes de connections sont');
    this.userService.getOneUser(this.formLogin.value).subscribe((Token) => {
      const token = Token.access_token;
      localStorage.setItem('access_token', token);

      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
    this.baba = localStorage.getItem('access_token');
  }

  //register

  formRegister = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    Repassword: ['', Validators.required],
  });

  register() {
    console.log('les donnees d enregistrement ');

    console.log(this.formRegister.value);
    this.userService.addUser(this.formRegister.value).subscribe((data) => {
      console.log(data);
    });
  }
}
