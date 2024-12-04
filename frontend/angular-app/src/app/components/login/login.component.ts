import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    if (!this.loginObj.email || !this.loginObj.password) {
      alert('All fields must be filled');
      return;
    }

    console.log(this.loginObj)

    this.http.post('http://localhost:5000/login', this.loginObj).subscribe(response => {
      console.log(response)
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error)
    })

  //   this.http.post('http://localhost:5000/login', this.loginObj).subscribe({
  //     next: (response: any) => {
  //       alert('Login successful!');
  //       console.log('Server response:', response);
  //       this.router.navigateByUrl('/home');
  //     },
  //     error: (err) => {
  //       alert('Invalid email or password');
  //       console.error('Error details:', err);
  //     },
  //   });
  }
}



