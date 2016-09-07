import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Post } from './post';


@Injectable()

export class PostService{
	private posts;
	private url = 'https://jsonplaceholder.typicode.com/posts';
	constructor(private _http: Http) {
		
	}

	getPosts(): Observable<Post[]>{
       return this._http
       .get(this.url)
       .map(res => res.json());
	}
	addPost(newPost){
        this.posts.push(newPost);
	}
}