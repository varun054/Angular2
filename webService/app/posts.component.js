"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('./post.service');
var PostsComponent = (function () {
    function PostsComponent(_postService) {
        this._postService = _postService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.addPost = function () {
        this.newPost = {
            title: this.title,
            body: this.body
        };
        //console.log(this.newPost);
        this._postService.addPost(this.newPost);
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n<div class=\"row\">\n<div class=\"panel panel-primary\" *ngFor=\"let post of posts; let i=index\">\n<div class=\"panel-heading\">{{i+1}} . {{post.title}}</div>\n<div class=\"panel-body\">{{post.body}}</div>\n</div>\n</div>\n\t"
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map