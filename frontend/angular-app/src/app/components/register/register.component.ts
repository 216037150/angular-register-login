import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerObj: any = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private http: HttpClient) {}

  onRegister() {
    if (this.registerObj.password !== this.registerObj.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.http.post('http://localhost:5000/register', this.registerObj).subscribe({
      next: (response) => {
        alert('Registration successful!');
        console.log(response);
      },
      error: (err) => {
        alert('Registration failed. Please try again.');
        console.error(err);
      },
    });
  }
}
