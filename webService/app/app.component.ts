import { Component } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { PostsComponent } from './posts.component';
import { PostService } from './post.service';


@Component({
	selector:'my-app',
	template:'<div class="container"><h1>My First Service Demo</h1><posts></posts></div>',
	directives: [PostsComponent],
	providers: [PostService,HTTP_PROVIDERS]
})

export class AppComponent {
	
	constructor() {
		// code...
	}
}
