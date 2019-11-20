import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user';
import { APIURL } from '../../environments/environment.prod';

let token = sessionStorage.getItem('token')

const httpOptions = {
    headers: new HttpHeaders({'Authorization': token})
}

@Injectable({
    providedIn: 'root'
})
 
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    signUp(username: string, email: string, password: string){
        return this.http.post<User>(`${APIURL}/auth/signup`, {username: username, email: email, password: password})
    }
    signin(username: string, password: string) {
        return this.http.post<User>(`${APIURL}/auth/signin`, { username: username, password: password})
    }
    update(username: string, email: string, id) {
        const user = {
          username: username,
          email: email
        }
        return this.http.put(`${APIURL}/auth/update/${id}`, user, httpOptions)
      }
    
      delete() {
        return this.http.delete(`${APIURL}/auth/delete`, httpOptions)
      }
    
      delete2(id) {
        return this.http.delete(`${APIURL}/auth/adminDelete/${id}`, httpOptions)
      }
    
      getUsers() {
        return this.http.get(`${APIURL}/auth/allUsers`, httpOptions)
      }
    
    }
