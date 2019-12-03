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
        return this.http.get(`${APIURL}/projects/view`, httpOptions)
    }

    deleteProject(deleteId: string){
        let url = `${APIURL}/projects/remove/${deleteId}`
        // console.log(url)
        return this.http.delete(`${APIURL}/projects/remove/${deleteId}`, httpOptions)
    }

    editProject(editId: string, newProjectName: string, newDescription: string, newLocation: string, newBadge: string){
        let url = `${APIURL}/projects/edit/${editId}`
        // console.log(url)
        return this.http.put(url, {projectName: newProjectName, description: newDescription, location: newLocation, badge: newBadge }, httpOptions)
    }

    // COMMENTS SERVICES //

    addComment(comment: string, id: string){
        console.log({comment: {project_id: id, content: comment}})
        let url = `${APIURL}/comments/comment`
        return this.http.post(url, {comment: {project_id: id, content: comment}}, httpOptions)
    }
    
    getComments(id: string){
        let url = `${APIURL}/comments/view/${id}`
        console.log(url)
        return this.http.get(url, httpOptions)
    }

    deleteComment(id: string){
        let url = `${APIURL}/comments/remove/${id}`;
        console.log(url)
        return this.http.delete(url, httpOptions)
    }

    updateComment(id: string, newComment: string){
        let url = `${APIURL}/comments/edit/${id}`;
        console.log(url)
        console.log(newComment)
        return this.http.put(url, { newComment: newComment }, httpOptions)
    }
}