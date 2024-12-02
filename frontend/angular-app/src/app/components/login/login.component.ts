import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObj.password === 'adm1n' && this.loginObj.email === 'admin@gmail.com') {
      this.router.navigateByUrl('/home');
    } else if(!this.loginObj.password || !this.loginObj.email){
      alert("all field must be filled")
    }else{
      alert('Wrong credentials');
    }
  }
}
