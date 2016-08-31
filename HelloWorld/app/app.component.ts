import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <h2>Welcome {{hero.name}}</h2>
  <div>
    <label>name: </label>
    <input value="{{hero.name}}" placeholder="name">
  </div>
  `

})
export class AppComponent {
  title = 'SmartData Developer';
    hero: Hero = {
    name: 'Varun Yadav'
   };
 }
