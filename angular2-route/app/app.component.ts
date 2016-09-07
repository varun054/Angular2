import { Component } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';

@Component({
  selector: 'my-app',
  template: `<my-header></my-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
