import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    if (!this.loginObj.email || !this.loginObj.password) {
      alert("All fields must be filled");
      return;
    }

    this.http.post('http://localhost:5000/login', this.loginObj).subscribe(
      (response: any) => {
        alert('Login successful!');
        this.router.navigateByUrl('/home'); 
      },
      (error) => {
        alert('Invalid email or password');
        console.error(error);
      }
    );
  }
}
