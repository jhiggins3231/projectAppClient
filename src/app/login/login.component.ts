import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../app/_services/authentication.service'
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('')
  password = new FormControl('')
  email = new FormControl('')
  usernameS = new FormControl('')
  passwordS = new FormControl('')

  constructor(private auth: AuthenticationService) {}


    ngOnInit() { 
    }

    login() {
      console.log(this.username.value)
      this.auth.signin(this.username.value, this.password.value)
      .subscribe(user => {
        sessionStorage.setItem('token', user.sessionToken)
        sessionStorage.setItem('role', user.user.role)
        alert(`${user.user.role} successfully logged in`)
        if(sessionStorage.getItem('role') === 'admin'){
          window.location.href = '/admin'
        } else {
          window.location.href = '/home'
        }
      },
      err => {
        alert(err.error.message)
      })
    }
    signUp() {
      if(this.passwordS.value.length >= 5 && this.passwordS.value.length <= 20) {
        this.auth.signUp(this.usernameS.value, this.email.value, this.passwordS.value)
        .subscribe(user => {
          sessionStorage.setItem('token', user.sessionToken)
          alert(user.message)
          window.location.href = '/home'
        },
        err => {
          if(err.error.fields.usernameS === this.usernameS.value) {
            alert('Username not available')
          } else {
            if(err.error.fields.email === this.email.value) {
              alert('This email already exist')
            }
          }
        })
    } else {
      alert('Password must be between 5 and 20 characters')
    }
  }
  logout() {
    sessionStorage.removeItem('token')
    window.location.href = '/login'
  }
}