import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { HeaderComponent }  from '../app/header/header.component';
import { HeroListComponent }    from './hero-list.component';
import { HomeComponent }    from './home.component';
import { CrisisListComponent }  from './crisis-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroListComponent,
    HomeComponent,
    CrisisListComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
