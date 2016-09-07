import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
	selector:'posts',
	template:`
<div class="row">
<div class="panel panel-primary" *ngFor="let post of posts; let i=index">
<div class="panel-heading">{{i+1}} . {{post.title}}</div>
<div class="panel-body">{{post.body}}</div>
</div>
</div>
	`
})

export class PostsComponent implements OnInit {
	private posts:Post[];
	private title;
	private body;
	private newPost: Post;
	constructor(private _postService: PostService) {
		
	}

	ngOnInit(){
	this._postService.getPosts().subscribe(posts => {
			this.posts = posts;
		});	
	}
	addPost(){
		this.newPost = {
			title: this.title,
			body: this.body
		}
		//console.log(this.newPost);
		this._postService.addPost(this.newPost);
	}
}