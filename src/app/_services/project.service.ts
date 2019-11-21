import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Projects } from '../projects';
import { APIURL } from '../../environments/environment.prod';

let token = sessionStorage.getItem('token')

const httpOptions = {
    headers: new HttpHeaders({'Authorization': token})
}

@Injectable({
    providedIn: 'root'
})

export class ProjectService {



    constructor(public http: HttpClient) {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
    }

    add(projectName: string, description: string, location: string, badge: string){
        return this.http.post<Projects>(`${APIURL}/projects/post`, {projectName: projectName, description: description, location: location, badge: badge}, httpOptions)
    }
    getByBadge(byBadge: string){
        return this.http.get(`${APIURL}/projects/badge/${byBadge}`, httpOptions)
    }

    getAll(){
        let url = `${APIURL}/projects/view`
        console.log(url)
        return this.http.get(`${APIURL}/projects/view`, httpOptions)
    }
}