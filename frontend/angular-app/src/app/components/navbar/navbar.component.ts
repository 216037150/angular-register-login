import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink="/">
        <img src="../images/mylogo.png" alt="Logo" id="mylogo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/register">Register</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
